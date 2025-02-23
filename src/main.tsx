import App from '@/App.tsx';
import { LocalizationProvider } from '@/components/core/LocalizationProvider.tsx';
import { ThemeProvider } from '@/components/core/theme-provider/ThemeProvider.tsx';
import { UserProvider } from '@/contexts/UserContext.tsx';
import Categories from '@/pages/categories/Categories';
import SignIn from '@/pages/sign-in/SignIn.tsx';
import Tags from '@/pages/tags/Tags';
import { paths } from '@/paths.ts';
import '@/styles/global.css';
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import Articles from './pages/articles/Articles';
import TagCreate from './pages/tags/create/TagCreate';
import TagUpdate from './pages/tags/update/TagUpdate';

const httpLink = createHttpLink({
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

export const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
});

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ApolloProvider client={client}>
            <BrowserRouter>
                <LocalizationProvider>
                    <UserProvider>
                        <ThemeProvider>
                            <Routes>
                                <Route path={paths.home} element={<App />}>
                                    <Route index element={<Navigate replace to='articles' />} />
                                    <Route path='articles' element={<Articles />} />
                                    <Route path='categories' element={<Categories />} />
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
