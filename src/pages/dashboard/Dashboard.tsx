import { AppSnackbar } from '@/components/app-snackbar/AppSnackbar';
import { MainNav } from '@/components/nav/main-nav/MainNav';
import { ArticleFormProvider } from '@/contexts/ArticleFormContext';
import { useUser } from '@/hooks/use-user';
import { authClient } from '@/lib/auth/AuthClient';
import { gql, useSubscription } from '@apollo/client';
import { Container } from '@mui/material';
import { useEffect } from 'react';
import { Outlet } from 'react-router';
import { StyledDashboard, StyledDashboardWrapper } from './styled';

const JWT_REFRESH = gql`
    subscription jwt {
        jwt
    }
`;

export function Dashboard(): React.JSX.Element {
    const { data, error } = useSubscription(JWT_REFRESH);
    const { setUserStateFromStorage } = useUser();

    useEffect(() => {
        if (data) {
            const { access_token } = JSON.parse(data.jwt);
            authClient.setAuthInStorage(access_token);
            setUserStateFromStorage();
        } else if (error) {
            console.error(
                'Error occurred in subscription. Please contact application administrator.'
            );
        }
    }, [data, error]);

    return (
        <StyledDashboard>
            <StyledDashboardWrapper
                sx={{
                    pl: { lg: 'var(--SideNav-width)' }
                }}
            >
                <ArticleFormProvider>
                    <MainNav />
                    <main>
                        <Container maxWidth='xl' sx={{ py: '64px' }}>
                            <Outlet />
                        </Container>
                    </main>
                    <AppSnackbar />
                </ArticleFormProvider>
            </StyledDashboardWrapper>
        </StyledDashboard>
    );
}
