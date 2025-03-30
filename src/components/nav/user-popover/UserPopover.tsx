import LogOutIcon from '@mui/icons-material/Logout';
import UserIcon from '@mui/icons-material/PersonOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import ListItemIcon from '@mui/material/ListItemIcon';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router';

import { useUser } from '@/hooks/use-user';
import { logger } from '@/lib/default-logger';
import { setAuth } from '@/main';
import { paths } from '@/paths';
import { useApolloClient } from '@apollo/client';
import { JSX, useCallback } from 'react';

export interface IUserPopoverProps {
    readonly anchorEl: Element | null;
    readonly onClose: () => void;
    readonly open: boolean;
}

export function UserPopover({ anchorEl, onClose, open }: IUserPopoverProps): JSX.Element {
    const { user, setUserStateFromStorage: checkSession } = useUser();
    const apolloClient = useApolloClient();

    const handleSignOut = useCallback(async (): Promise<void> => {
        try {
            setAuth(apolloClient, false);
        } catch (err) {
            logger.error('Sign out error', err);
        }
    }, [checkSession]);

    if (!user) {
        return <div>User not found</div>;
    }

    return (
        <Popover
            anchorEl={anchorEl}
            anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
            onClose={onClose}
            open={open}
            slotProps={{ paper: { sx: { width: '240px' } } }}
        >
            <Box sx={{ p: '16px 20px ' }}>
                <Typography variant='subtitle1'>
                    {`${user.first_name} ${user.last_name}`}{' '}
                </Typography>
                <Typography color='text.secondary' variant='body2'>
                    {user.email}
                </Typography>
            </Box>
            <Divider />
            <MenuList disablePadding sx={{ p: '8px', '& .MuiMenuItem-root': { borderRadius: 1 } }}>
                <MenuItem component={NavLink} to={paths.dashboard.settings} onClick={onClose}>
                    <ListItemIcon>
                        <SettingsIcon fontSize='medium' />
                    </ListItemIcon>
                    Settings
                </MenuItem>
                <MenuItem component={NavLink} to={paths.dashboard.categories} onClick={onClose}>
                    <ListItemIcon>
                        <UserIcon fontSize='medium' />
                    </ListItemIcon>
                    Profile
                </MenuItem>
                <MenuItem onClick={handleSignOut}>
                    <ListItemIcon>
                        <LogOutIcon fontSize='medium' />
                    </ListItemIcon>
                    Sign out
                </MenuItem>
            </MenuList>
        </Popover>
    );
}
