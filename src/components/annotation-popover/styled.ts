import { Box, styled } from '@mui/material';

export const StyledBlockParserWrapper = styled(Box, {
    name: 'Styled Dashboard',
    slot: 'Root'
})`
    .text-left {
        text-align: left;
    }

    .text-center {
        text-align: center;
    }

    .text-right {
        text-align: right;
    }

    .text-justify {
        text-align: justify;
    }

    .w-full {
        width: 100%;
    }
`;
