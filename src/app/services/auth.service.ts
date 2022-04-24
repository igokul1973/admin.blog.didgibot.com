import { Injectable, Injector } from '@angular/core';
import { ICredentialsInput, IMutation, ITokens, Maybe } from '@src/generated/types';
import { LOGIN_USER } from '@src/operations/mutations/loginUser';
import { Apollo } from 'apollo-angular';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { LocalStorageService } from '@services/local-storage.service';
import { isUserLoggedIn } from '@src/app/cache';
import { REFRESH_TOKENS } from '@src/operations/mutations/refreshTokens';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(private localStorageService: LocalStorageService, private injector: Injector) {}

    refreshTokens() {
        const refreshToken = this.localStorageService.getRefreshToken();

        if (!refreshToken) {
            return of(null);
        }

        const apollo = this.injector.get(Apollo);
        return apollo
            .mutate<Pick<IMutation, 'refreshTokens'>>({
                mutation: REFRESH_TOKENS,
                variables: {
                    refreshToken
                },
                fetchPolicy: 'no-cache'
            })
            .pipe(
                map((d) => {
                    const accessToken = d.data?.refreshTokens?.accessToken;
                    const refreshToken = d.data?.refreshTokens?.refreshToken;
                    if (accessToken && refreshToken) {
                        return {
                            accessToken,
                            refreshToken
                        };
                    }
                    return null;
                })
            );
    }

    fetchTokens(input: ICredentialsInput): Observable<Maybe<Omit<ITokens, '__typename'>>> {
        const apollo = this.injector.get(Apollo);
        return apollo
            .mutate<Pick<IMutation, 'loginUser'>>({
                mutation: LOGIN_USER,
                variables: {
                    input
                }
            })
            .pipe(
                map((d) => {
                    const accessToken = d.data?.loginUser?.accessToken;
                    const refreshToken = d.data?.loginUser?.refreshToken;
                    if (accessToken && refreshToken) {
                        return {
                            accessToken,
                            refreshToken
                        };
                    }
                    return null;
                })
            );
    }

    logIn(tokens: Omit<ITokens, '__typename'>) {
        this.localStorageService.saveTokens(tokens);
        isUserLoggedIn(true);
    }

    logOut() {
        this.localStorageService.removeTokens();
        isUserLoggedIn(false);
    }
}
