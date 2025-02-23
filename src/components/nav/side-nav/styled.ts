import { Paper, styled } from '@mui/material';

export const ContainerBox = styled(Paper, {
    name: 'Container Box',
    slot: 'Root',
    shouldForwardProp: (prop) => prop !== 'isMobile'
})<{ isMobile: boolean }>`
    background-color: var(--SideNav-background);
    color: var(--SideNav-color);
    flex-direction: column;
    height: 100%;
    left: 0;
    max-width: 100%;
    position: fixed;
    scrollbar-width: none;
    top: 0;
    width: var(--SideNav-width);
    width: 280px;
    z-index: var(--SideNav-zIndex);
    &::-webkit-scrollbar: {
        display: none;
    }
`;
