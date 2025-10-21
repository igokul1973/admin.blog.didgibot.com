import DidgibotLogo from '@/components/didgibot-logo/DidgibotLogo';
import { paths } from '@/paths';
import type { INavItemConfig } from '@/types/nav';
import { Drawer, useMediaQuery, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import { JSX } from 'react';
import { NavLink, useLocation } from 'react-router';
import { navItems } from '../nav-items';
import { renderNavItems } from '../utils/render-nav-items';
import { ContainerBox } from './styled';

export interface ISideNavProps {
    readonly onClose: () => void;
    readonly isOpen?: boolean;
    readonly items?: INavItemConfig[];
}

export function SideNav({ isOpen, onClose, items }: ISideNavProps): JSX.Element {
    const location = useLocation();
    const pathname = location.pathname;
    const theme = useTheme();
    const upToLargeScreen = useMediaQuery(theme.breakpoints.down('lg'));

    return (
        <Drawer
            variant={upToLargeScreen ? 'temporary' : 'permanent'}
            PaperProps={{
                component: ContainerBox,
                sx: {
                    backgroundColor: 'var(--mui-palette-neutral-950)',
                    color: 'var(--SideNav-color)'
                }
            }}
            onClose={(_, reason) => {
                return (
                    (reason === 'backdropClick' || reason === 'escapeKeyDown') &&
                    onClose &&
                    onClose()
                );
            }}
            open={isOpen}
        >
            <Stack spacing={2} sx={{ p: 3 }}>
                <Box component={NavLink} to={paths.home} sx={{ display: 'inline-flex' }}>
                    <DidgibotLogo color='var(--NavItem-active-background)' />
                </Box>
            </Stack>
            <Divider sx={{ borderColor: 'var(--mui-palette-neutral-700)' }} />
            <Box component='nav' sx={{ flex: '1 1 auto', p: '12px' }}>
                {renderNavItems({ pathname, items: items?.length ? items : navItems, onClose })}
            </Box>
        </Drawer>
    );
}
