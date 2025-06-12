import { ArticleFormContext } from '@/contexts/ArticleFormContext';
import { usePopover } from '@/hooks/use-popover';
import ListIcon from '@mui/icons-material/List';
import BellIcon from '@mui/icons-material/Notifications';
import UsersIcon from '@mui/icons-material/People';
import MagnifyingGlassIcon from '@mui/icons-material/Search';
import {
    Avatar,
    Badge,
    Button,
    Checkbox,
    FormControl,
    FormControlLabel,
    IconButton,
    Stack,
    Tooltip,
    useMediaQuery,
    useTheme
} from '@mui/material';
import { JSX, use, useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { SideNav } from '../side-nav/SideNav';
import { UserPopover } from '../user-popover/UserPopover';
import { StyledMainNav } from './styled';

export function MainNav(): JSX.Element {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const userPopover = usePopover<HTMLDivElement>();
    const theme = useTheme();
    const upToXLargeScreen = useMediaQuery(theme.breakpoints.down('xl'));
    const {
        isRedirectOnArticleSubmit,
        isArticleFormDirty,
        setSubmitEvent,
        setIsRedirectOnArticleSubmit
    } = use(ArticleFormContext);
    const { pathname } = useLocation();
    const [isUpdateArticlePage, setIsUpdateArticlePage] = useState(false);

    useEffect(() => {
        if (upToXLargeScreen) {
            setIsNavOpen(false);
        } else {
            setIsNavOpen(true);
        }
    }, [upToXLargeScreen]);

    // Check if the current page is an update page
    useEffect(() => {
        const isUpdate = pathname.match(/articles\/[^/]+\/update/) !== null;
        setIsUpdateArticlePage(isUpdate);
    }, [pathname]);

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
                    {isUpdateArticlePage && (
                        <Stack sx={{ alignItems: 'right' }} direction='row' spacing={2}>
                            <Tooltip title='Do not redirect on Article submit'>
                                <FormControl>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={isRedirectOnArticleSubmit}
                                                onChange={(event): void => {
                                                    setIsRedirectOnArticleSubmit(
                                                        event.target.checked
                                                    );
                                                }}
                                            />
                                        }
                                        label={
                                            isRedirectOnArticleSubmit
                                                ? 'Redirect on Save'
                                                : 'Do not Redirect on Save'
                                        }
                                    />
                                </FormControl>
                            </Tooltip>
                            <Tooltip title='Submit Article'>
                                <Button
                                    disabled={!isArticleFormDirty}
                                    variant='contained'
                                    onClick={(): void => {
                                        setSubmitEvent({ isSubmit: true });
                                    }}
                                >
                                    Save article
                                </Button>
                            </Tooltip>
                        </Stack>
                    )}
                    <Stack direction='row' alignItems='center' spacing={1}></Stack>
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
