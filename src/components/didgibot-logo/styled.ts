import { styled } from '@mui/material';
import Box from '@mui/material/Box';
import ReceiptIcon from '@mui/icons-material/Receipt';

export const StyledLogoWrapper = styled(Box, {
    name: 'Styled Logo Wrapper',
    slot: 'Root'
})`
    width: min-content;
    display: grid;
    grid-template-columns: repeat(2, min-content);
    align-items: center;
    justify-content: center;
` as typeof Box;

export const StyledLogoIcon = styled(ReceiptIcon, {
    name: 'Styled Logo Icon',
    slot: 'Root'
})`
    height: 3ch;
    width: 3ch;
`;
