import { Box, styled } from '@mui/material';

export const StyledEditor = styled(Box, {
    name: 'Styled Editor',
    slot: 'Root'
})`
    border: 1px solid var(--mui-palette-neutral-300);
    border-radius: 8px;
    &:hover {
        border: 1px solid var(--mui-palette-neutral-700);
    }
`;
