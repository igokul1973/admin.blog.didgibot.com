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

    .md\\:grid-cols-2 {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 2rem;

        @media (width <= 768px) {
            grid-template-columns: repeat(1, minmax(0, 1fr));
        }
    }

    .lg\\:grid-cols-3 {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 2rem;

        @media (width <= 1024px) {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 1rem;
        }

        @media (width <= 768px) {
            grid-template-columns: repeat(1, minmax(0, 1fr));
        }
    }
`;
