import { styled } from '@mui/material';
import Box from '@mui/material/Box';

export const NavItemBox = styled(Box, {
    name: 'Nav Item Box',
    slot: 'Root'
})`
    align-items: center;
    border-radius: 4px;
    color: var(--NavItem-color);
    cursor: pointer;
    display: flex;
    flex: 0 0 auto;
    gap: 0.5em;
    padding: 6px 1rem;
    position: relative;
    text-decoration: none;
    white-space: nowrap;
`;
