import { useUser } from '@/hooks/use-user';
import { authClient } from '@/lib/auth/AuthClient';
import { logger } from '@/lib/default-logger';
import { httpLink, nonTerminatingLinks, SET_AUTH } from '@/main';
import { paths } from '@/paths';
import { from, split, useApolloClient } from '@apollo/client';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { getMainDefinition } from '@apollo/client/utilities';
import { createClient } from 'graphql-ws';
import { JSX, ReactNode, useEffect } from 'react';
import { useNavigate } from 'react-router';

export interface IAuthGuardProps {
    readonly children: ReactNode;
}

export function AuthGuard({ children }: IAuthGuardProps): JSX.Element | null {
    const navigate = useNavigate();
    const { user, setUserStateFromStorage } = useUser();
    const apolloClient = useApolloClient();

    useEffect(() => {
        if (!user) {
            logger.debug('[AuthGuard]: User is not logged in, redirecting to sign in');
            navigate(paths.auth.signIn);
        } else {
            const wsUrl = `ws://${window.location.host}/subscriptions`;
            const { token } = authClient.getUser();
            const wsLink = new GraphQLWsLink(
                createClient({
                    url: wsUrl,
                    connectionParams: {
                        token,
                        bla: 'bla'
                    }
                })
            );

            // The split function takes three parameters:
            //
            // * A function that's called for each operation to execute
            // * The Link to use for an operation if the function returns a "truthy" value
            // * The Link to use for an operation if the function returns a "falsy" value
            const splitLink = split(
                ({ query }) => {
                    const definition = getMainDefinition(query);
                    return (
                        definition.kind === 'OperationDefinition' &&
                        definition.operation === 'subscription'
                    );
                },
                wsLink,
                httpLink
            );

            apolloClient.setLink(from([...nonTerminatingLinks, splitLink]));
        }
    }, [user]);

    useEffect(() => {
        apolloClient.cache.watch({
            query: SET_AUTH,
            optimistic: true,
            callback: ({ complete, result }) => {
                if (complete && !result.auth.isAuthenticated) {
                    authClient.unsetAuthInStorage();
                    setUserStateFromStorage();
                    apolloClient.clearStore();
                }
            }
        });
    }, []);

    return <>{children}</>;
}
