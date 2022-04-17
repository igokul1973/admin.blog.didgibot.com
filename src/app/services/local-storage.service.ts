import { Injectable } from '@angular/core';
import { ITokens, IUser } from '@src/generated/types';
import { isUserLoggedIn } from '../cache';
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY, LAST_VISITED_ROUTE_KEY, USER_KEY } from './constants';

@Injectable({
    providedIn: 'root'
})
export class LocalStorageService {
    removeTokens(): void {
        window.localStorage.removeItem(ACCESS_TOKEN_KEY);
        window.localStorage.removeItem(REFRESH_TOKEN_KEY);
    }

    saveAccessToken(accessToken: ITokens['accessToken']): void {
        window.localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
    }

    saveRefreshToken(refreshToken: ITokens['accessToken']) {
        window.localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
    }

    saveTokens({ accessToken, refreshToken }: Omit<ITokens, '__typename'>): void {
        // TODO: Check if removing tokens is necessary
        this.removeTokens();
        this.saveAccessToken(accessToken);
        this.saveRefreshToken(refreshToken);
    }

    getAccessToken(): ITokens['accessToken'] | null {
        return window.localStorage.getItem(ACCESS_TOKEN_KEY);
    }

    getRefreshToken(): ITokens['refreshToken'] | null {
        return window.localStorage.getItem(REFRESH_TOKEN_KEY);
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

    saveUser(user: IUser): void {
        window.localStorage.removeItem(USER_KEY);
        window.localStorage.setItem(USER_KEY, JSON.stringify(user));
    }

    getUser(): IUser | null {
        const user = window.localStorage.getItem(USER_KEY);
        if (user !== null) {
            return JSON.parse(user) as IUser;
        }
        return user;
    }
}
