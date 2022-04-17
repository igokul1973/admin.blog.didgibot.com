import { InMemoryCache, makeVar } from '@apollo/client/core';
import { ACCESS_TOKEN_KEY } from '@services/constants';

export interface ICachedFields {
    isUserLoggedIn: boolean;
}

const fields = {
    isUserLoggedIn: {
        read() {
            return isUserLoggedIn();
        }
    }
};

export const cache: InMemoryCache = new InMemoryCache({
    typePolicies: {
        Query: {
            fields
        }
    }
});

export const isUserLoggedIn = makeVar<boolean>(!!window.localStorage.getItem(ACCESS_TOKEN_KEY));
