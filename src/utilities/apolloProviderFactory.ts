import { ApolloLink } from '@apollo/client/core';
import { HttpLink } from 'apollo-angular/http';
import { cache } from '@src/app/cache';
import { AuthService } from '@services/auth.service';
import { LocalStorageService } from '@services/local-storage.service';
import { SnackbarService } from '@services/snackbar.service';
import { environment } from '@src/environments/environment';
import { getApolloErrorLink } from './getApolloErrorLink';
import { JwtService } from '@services/jwt.service';

const ACCESS_TOKEN_HEADER_KEY = 'Authorization';

export const apolloProviderFactory = (
    httpLink: HttpLink,
    localStorageService: LocalStorageService,
    authService: AuthService,
    snackbarService: SnackbarService,
    jwtService: JwtService
) => {
    const httpApolloLink = httpLink.create({
        uri: environment.apiUrl
    });
    // Adding an access token to each request but the LoginUser
    const authLink = new ApolloLink((operation, forward) => {
        if (operation.operationName !== 'LoginUser') {
            operation.setContext({
                headers: {
                    [ACCESS_TOKEN_HEADER_KEY]: `Bearer ${localStorageService.getAccessToken()}`
                }
            });
        }
        return forward(operation);
    });

    const errorApolloLink = getApolloErrorLink(authService, snackbarService, jwtService);

    const link = errorApolloLink.concat(authLink.concat(httpApolloLink));

    return {
        cache,
        link
    };
};
