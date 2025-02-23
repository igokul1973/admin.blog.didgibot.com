import { MainNav } from '@/components/nav/main-nav/MainNav';
import { Container } from '@mui/material';
import { Outlet } from 'react-router';
import { StyledDashboard, StyledDashboardWrapper } from './styled';

export function Dashboard(): React.JSX.Element {
    return (
        <StyledDashboard>
            <StyledDashboardWrapper
                sx={{
                    pl: { lg: 'var(--SideNav-width)' }
                }}
            >
                <MainNav />
                <main>
                    <Container maxWidth='xl' sx={{ py: '64px' }}>
                        <Outlet />
                    </Container>
                </main>
            </StyledDashboardWrapper>
        </StyledDashboard>
    );
}
