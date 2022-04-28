import { Injectable } from '@angular/core';
import { ITokens, IUser } from '@src/generated/types';
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY, LAST_VISITED_ROUTE_KEY, USER_KEY } from './constants';

@Injectable({
    providedIn: 'root'
})
export class LocalStorageService {
    setTokens({ accessToken, refreshToken }: Omit<ITokens, '__typename'>): void {
        // TODO: Check if removing tokens is necessary
        this.removeTokens();
        this.setAccessToken(accessToken);
        this.setRefreshToken(refreshToken);
    }

    removeTokens(): void {
        window.localStorage.removeItem(ACCESS_TOKEN_KEY);
        window.localStorage.removeItem(REFRESH_TOKEN_KEY);
    }

    getAccessToken(): ITokens['accessToken'] | null {
        return window.localStorage.getItem(ACCESS_TOKEN_KEY);
    }

    setAccessToken(accessToken: ITokens['accessToken']): void {
        window.localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
    }

    getRefreshToken(): ITokens['refreshToken'] | null {
        return window.localStorage.getItem(REFRESH_TOKEN_KEY);
    }

    setRefreshToken(refreshToken: ITokens['accessToken']) {
        window.localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
    }

    getLastVisitedRoute(): string | null {
        return window.localStorage.getItem(LAST_VISITED_ROUTE_KEY);
    }

    setLastVisitedRoute(route: string): void {
        return window.localStorage.setItem(LAST_VISITED_ROUTE_KEY, route);
    }

    removeLastVisitedRoute(): void {
        window.localStorage.removeItem(LAST_VISITED_ROUTE_KEY);
    }

    getUser(): IUser | null {
        const user = window.localStorage.getItem(USER_KEY);
        if (user !== null) {
            return JSON.parse(user) as IUser;
        }
        return user;
    }

    setUser(user: Pick<IUser, 'id' | 'email'>): void {
        window.localStorage.removeItem(USER_KEY);
        window.localStorage.setItem(USER_KEY, JSON.stringify(user));
    }

    removeUser(): void {
        window.localStorage.removeItem(USER_KEY);
    }
}
