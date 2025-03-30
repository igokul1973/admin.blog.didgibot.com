import { Card, Stack, styled } from '@mui/material';

export const StyledCard = styled(Card, {
    name: 'Styled Card',
    slot: 'Root'
})`
    tbody td,
    tbody div,
    tbody p {
        font-size: 0.8rem;
    }
`;

export const StyledStack = styled(Stack, {
    name: 'Styled Stack',
    slot: 'shmoot'
})`
    height: 130px;
    overflow: hidden;
    gap: 10px;

    & > * {
        height: 75px;
        max-height: 75px;
        overflow: hidden;
    }

    .html {
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p {
            padding: 0;
            margin: 0;
        }
    }
`;
