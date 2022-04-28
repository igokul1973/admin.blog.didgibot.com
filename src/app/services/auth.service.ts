import { Injectable, Injector } from '@angular/core';
import { ICredentialsInput, IMutation, ITokens, IUser, Maybe } from '@src/generated/types';
import { LOGIN_USER } from '@src/operations/mutations/loginUser';
import { Apollo, gql } from 'apollo-angular';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { LocalStorageService } from '@services/local-storage.service';
import { ICachedFields, isUserLoggedIn } from '@src/app/cache';
import { REFRESH_TOKENS } from '@src/operations/mutations/refreshTokens';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(private localStorageService: LocalStorageService, private injector: Injector) {}

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

    getIsUserLoggedIn() {
        const apollo = this.injector.get(Apollo);

        return apollo.watchQuery<ICachedFields>({
            query: gql`
                query GetIsUserLoggedIn {
                    isUserLoggedIn @client
                }
            `
        });
    }

    logIn(tokens: Omit<ITokens, '__typename'>, user: Pick<IUser, 'id' | 'email'>) {
        this.localStorageService.setTokens(tokens);
        this.localStorageService.setUser(user);
        isUserLoggedIn(true);
    }

    logOut() {
        this.localStorageService.removeTokens();
        this.localStorageService.removeUser();
        isUserLoggedIn(false);
    }
}
