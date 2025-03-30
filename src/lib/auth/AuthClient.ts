import getErrorMessage from '@/lib/getErrorMessage';
import type { IUser } from '@/types/user';

export interface IUserPayload {
    sub: 'igk19@me.com';
    exp: 1740287614;
    user: IUser;
}

export interface ISignUpParams {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export interface ISignInWithOAuthParams {
    provider: 'google' | 'discord';
}

export interface ISignInWithPasswordParams {
    email: string;
    password: string;
}

export interface IResetPasswordParams {
    email: string;
}

class AuthClient {
    async signInWithOAuth(_: ISignInWithOAuthParams): Promise<{ error?: string }> {
        return { error: 'Social authentication not implemented' };
    }

    getJwtPayload(token: string): IUserPayload {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(
            atob(base64)
                .split('')
                .map((c) => `%${`00${c.charCodeAt(0).toString(16)}`.slice(-2)}`)
                .join('')
        );
        return JSON.parse(jsonPayload);
    }

    /**
     * Sign in with password and set
     * JWT token and user in local storage.
     *
     * @param {ISignInWithPasswordParams} params
     * @returns {Promise<{ error: string | null }>}
     */
    async signInWithPassword(params: ISignInWithPasswordParams): Promise<{ error: string | null }> {
        const { email, password } = params;
        const formData = new FormData();
        formData.append('username', email);
        formData.append('password', password);

        // Make API request
        const res = await fetch('/api/login', {
            method: 'POST',
            body: formData
        });

        if (res.status === 401) {
            return { error: 'Invalid credentials' };
        }

        if (res.status !== 200) {
            return { error: 'Something went wrong' };
        }

        const decodedResponse = await res.json();

        if (decodedResponse.error) {
            return { error: decodedResponse.error };
        }

        const { access_token: jwtToken } = decodedResponse;

        try {
            this.setAuthInStorage(jwtToken);
            return { error: null };
        } catch (e: unknown) {
            return { error: getErrorMessage(e) };
        }
    }

    async resetPassword(_: IResetPasswordParams): Promise<{ error?: string }> {
        return { error: 'Password reset not implemented' };
    }

    async updatePassword(_: IResetPasswordParams): Promise<{ error?: string }> {
        return { error: 'Update reset not implemented' };
    }

    getUser(): { user: IUser | null; token: string | null } {
        // We do not handle the API, so just check if we have a token in localStorage.
        const token = localStorage.getItem('jwtToken');
        const user = localStorage.getItem('user');

        if (!token || !user) {
            return { user: null, token: null };
        }

        return { user: JSON.parse(user), token };
    }

    setAuthInStorage(jwtToken: string): void {
        const payload = this.getJwtPayload(jwtToken);
        localStorage.setItem('jwtToken', jwtToken);
        localStorage.setItem('user', JSON.stringify(payload.user));
    }

    unsetAuthInStorage(): void {
        localStorage.removeItem('jwtToken');
        localStorage.removeItem('user');
    }
}

export const authClient = new AuthClient();
