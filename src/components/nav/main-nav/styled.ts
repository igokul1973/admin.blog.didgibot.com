import { styled } from '@mui/material';

export const StyledMainNav = styled('header', {
    name: 'Styled Main Nav',
    slot: 'Root'
})`
    border-bottom: 1px solid var(--mui-palette-divider);
    background-color: var(--mui-palette-background-paper);
    position: sticky;
    top: 0;
    z-index: var(--mui-zIndex-appBar);
`;
