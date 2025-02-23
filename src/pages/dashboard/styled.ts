import { Box, styled } from '@mui/material';

export const StyledDashboard = styled(Box, {
    name: 'Styled Dashboard',
    slot: 'Root'
})`
    background-color: var(--mui-palette-background-default);
    display: flex;
    flex-direction: column;
    position: relative;
    min-height: 100%;
    color: var(--mui-palette-common-black);
`;

export const StyledDashboardWrapper = styled(Box, {
    name: 'Styled Dashboard Wrapper',
    slot: 'Root'
})`
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
`;
