import { ApolloLink } from '@apollo/client/core';
import { HttpLink } from 'apollo-angular/http';
import { cache } from '@src/app/cache';
import { AuthService } from '@src/app/services/auth.service';
import { LocalStorageService } from '@src/app/services/local-storage.service';
import { SnackbarService } from '@src/app/services/snackbar.service';
import { environment } from '@src/environments/environment';
import { getApolloErrorLink } from './getApolloErrorLink';

const ACCESS_TOKEN_HEADER_KEY = 'Authorization';

export const apolloProviderFactory = (
    httpLink: HttpLink,
    localStorageService: LocalStorageService,
    authService: AuthService,
    snackbarService: SnackbarService
) => {
    const httpApolloLink = httpLink.create({
        // uri: environment.apiUrl
        uri: 'http://192.168.10.250:4000/graphql'
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

    const errorApolloLink = getApolloErrorLink(authService, snackbarService);

    const link = errorApolloLink.concat(authLink.concat(httpApolloLink));

    return {
        cache,
        link
    };
};
