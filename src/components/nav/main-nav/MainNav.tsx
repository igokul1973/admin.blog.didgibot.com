import { usePopover } from '@/hooks/use-popover';
import ListIcon from '@mui/icons-material/List';
import BellIcon from '@mui/icons-material/Notifications';
import UsersIcon from '@mui/icons-material/People';
import MagnifyingGlassIcon from '@mui/icons-material/Search';
import { Avatar, Badge, IconButton, Stack, Tooltip, useMediaQuery, useTheme } from '@mui/material';
import { JSX, useEffect, useState } from 'react';
import { SideNav } from '../side-nav/SideNav';
import { UserPopover } from '../user-popover/UserPopover';
import { StyledMainNav } from './styled';

export function MainNav(): JSX.Element {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const userPopover = usePopover<HTMLDivElement>();
    const theme = useTheme();
    const upToXLargeScreen = useMediaQuery(theme.breakpoints.down('xl'));

    useEffect(() => {
        if (upToXLargeScreen) {
            setIsNavOpen(false);
        } else {
            setIsNavOpen(true);
        }
    }, [upToXLargeScreen]);

    return (
        <>
            <StyledMainNav>
                <Stack
                    direction='row'
                    spacing={2}
                    sx={{
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        minHeight: '64px',
                        px: 2
                    }}
                >
                    <Stack sx={{ alignItems: 'center' }} direction='row' spacing={2}>
                        <IconButton
                            onClick={(): void => {
                                setIsNavOpen(true);
                            }}
                            sx={{ display: { lg: 'none' } }}
                        >
                            <ListIcon />
                        </IconButton>
                        <Tooltip title='Search'>
                            <IconButton>
                                <MagnifyingGlassIcon />
                            </IconButton>
                        </Tooltip>
                    </Stack>
                    <Stack sx={{ alignItems: 'center' }} direction='row' spacing={2}>
                        <Tooltip title='Contacts'>
                            <IconButton>
                                <UsersIcon />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title='Notifications'>
                            <Badge badgeContent={4} color='success' variant='dot'>
                                <IconButton>
                                    <BellIcon />
                                </IconButton>
                            </Badge>
                        </Tooltip>
                        <Avatar
                            onClick={userPopover.handleOpen}
                            ref={userPopover.anchorRef}
                            src='/assets/avatar.png'
                            sx={{ cursor: 'pointer' }}
                        />
                    </Stack>
                </Stack>
            </StyledMainNav>
            <UserPopover
                anchorEl={userPopover.anchorRef.current}
                onClose={userPopover.handleClose}
                open={userPopover.open}
            />
            <SideNav onClose={() => setIsNavOpen(false)} isOpen={isNavOpen} />
        </>
    );
}
