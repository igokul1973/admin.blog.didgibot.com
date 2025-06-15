import { Button } from '@mui/material';
import { Box, styled } from '@mui/system';

export const StyledButtonWrapper = styled(Box, {
    name: 'StyledButtonWrapper',
    slot: 'Root'
})`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    position: fixed;
    bottom: 1rem;
    right: 1rem;
`;

export const ButtonStyled = styled(Button, {
    name: 'ButtonStyled',
    slot: 'Root'
})`
    opacity: 0.3;
    &:hover {
        opacity: 0.8;
    }
`;
