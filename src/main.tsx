import App from '@/App.tsx';
import { LocalizationProvider } from '@/components/core/LocalizationProvider.tsx';
import { ThemeProvider } from '@/components/core/theme-provider/ThemeProvider.tsx';
import { UserProvider } from '@/contexts/user/UserProvider';
import { authClient } from '@/lib/auth/AuthClient';
import Articles from '@/pages/articles/Articles';
import ArticleCreate from '@/pages/articles/create/ArticleCreate';
import ArticleUpdate from '@/pages/articles/update/ArticleUpdate';
import Categories from '@/pages/categories/Categories';
import CategoryCreate from '@/pages/categories/create/CategoryCreate';
import CategoryUpdate from '@/pages/categories/update/CategoryUpdate';
import SignIn from '@/pages/sign-in/SignIn.tsx';
import TagCreate from '@/pages/tags/create/TagCreate';
import Tags from '@/pages/tags/Tags';
import TagUpdate from '@/pages/tags/update/TagUpdate';
import { paths } from '@/paths.ts';
import '@/styles/global.css';
import { ApolloClient, createHttpLink, from, gql, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import { ApolloProvider } from '@apollo/client/react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router';

export const READ_AUTH = gql`
    query ReadAuth {
        auth {
            isAuthenticated
        }
    }
`;

export const SET_AUTH = gql`
    query SetAuth {
        auth {
            isAuthenticated
        }
    }
`;

export const setAuth = (client: ApolloClient, isAuthenticated: boolean) => {
    client.cache.writeQuery({
        query: SET_AUTH,
        data: {
            auth: {
                isAuthenticated,
                __typename: 'Auth'
            }
        }
    });
};

const { user } = authClient.getUser();

export const httpLink = createHttpLink({
    uri: '/graphql'
});

const authLink = setContext((_, { headers }) => {
    return {
        headers: {
            ...headers,
            authorization: `Bearer ${localStorage.getItem('jwtToken') ?? ''}`
        }
    };
});

// 1. Create mutation that sets the login status in Apollo Client cache.
// 2. Upon initialization, in the `main.tsx`, we check if a user and JWT
// token are available in the local storage. If so, we set the login status
// in Apollo Client cache.
// 3. In the AuthGuard, we watch the login status in Apollo Client cache.
// 4. If the login status changes and is `false`, we remove user and JWT
// token from local storage and redirect to the sign-in page.
// 5. If the login status changes to `true`, we redirect further (probably to the home page?).
// 6. Upon log-in, we set the login status in Apollo Client cache.

const logoutLink = onError((options) => {
    const { graphQLErrors } = options as {
        graphQLErrors?: readonly { extensions?: { error_code?: number } | null }[];
    };
    if (graphQLErrors?.length) {
        const isForbidden = graphQLErrors.some((error) => error.extensions?.error_code === 401);
        if (isForbidden) {
            setAuth(client, false);
        }
    }
});

export const nonTerminatingLinks = [authLink, logoutLink];

export const client = new ApolloClient({
    link: from([...nonTerminatingLinks, httpLink]),
    cache: new InMemoryCache()
});

if (user) {
    setAuth(client, true);
}

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ApolloProvider client={client}>
            <BrowserRouter>
                <LocalizationProvider>
                    <UserProvider initialState={{ user }}>
                        <ThemeProvider>
                            <Routes>
                                <Route path={paths.home} element={<App />}>
                                    <Route index element={<Navigate replace to='articles' />} />
                                    <Route path='articles'>
                                        <Route index element={<Articles />} />
                                        <Route path='create' element={<ArticleCreate />} />
                                        <Route path=':id/update' element={<ArticleUpdate />} />
                                    </Route>
                                    <Route path='categories'>
                                        <Route index element={<Categories />} />
                                        <Route path='create' element={<CategoryCreate />} />
                                        <Route path=':id/update' element={<CategoryUpdate />} />
                                    </Route>
                                    <Route path='tags'>
                                        <Route index element={<Tags />} />
                                        <Route path='create' element={<TagCreate />} />
                                        <Route path=':id/update' element={<TagUpdate />} />
                                    </Route>
                                </Route>
                                <Route path={paths.auth.signIn} element={<SignIn />} />
                            </Routes>
                        </ThemeProvider>
                    </UserProvider>
                </LocalizationProvider>
            </BrowserRouter>
        </ApolloProvider>
    </StrictMode>
);
