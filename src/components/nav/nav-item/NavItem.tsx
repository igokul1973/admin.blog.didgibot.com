import { isNavItemActive } from '@/lib/is-nav-item-active';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import { JSX } from 'react';
import { NavLink } from 'react-router';
import { navIcons } from '../nav-icons';
import { NavItemBox } from './styled';
import { INavItemProps } from './types';

export default function NavItem({
    disabled,
    external,
    href,
    icon,
    matcher,
    pathname,
    title,
    onClose
}: INavItemProps): JSX.Element {
    const active = isNavItemActive({ disabled, external, href, matcher, pathname });
    const Icon = icon ? navIcons[icon] : null;

    const theme = useTheme();
    const isUpToLargeScreen = useMediaQuery(theme.breakpoints.down('lg'));

    return (
        <li>
            <NavItemBox
                {...(href
                    ? {
                          component: external ? 'a' : NavLink,
                          to: href,
                          target: external ? '_blank' : undefined,
                          rel: external ? 'noreferrer' : undefined
                      }
                    : { role: 'button' })}
                sx={{
                    ...(disabled && {
                        bgcolor: 'var(--NavItem-disabled-background)',
                        color: 'var(--NavItem-disabled-color)',
                        cursor: 'not-allowed'
                    }),
                    ...(active && {
                        bgcolor: 'var(--NavItem-active-background)',
                        color: 'var(--NavItem-active-color)'
                    })
                }}
                onClick={() => {
                    if (isUpToLargeScreen) {
                        onClose();
                    }
                }}
            >
                <Box
                    sx={{
                        alignItems: 'center',
                        display: 'flex',
                        flex: '0 0 auto'
                    }}
                >
                    {Icon ? (
                        <Icon
                            fill={
                                active
                                    ? 'var(--NavItem-icon-active-color)'
                                    : 'var(--NavItem-icon-color)'
                            }
                            fontSize='medium'
                            fontWeight={active ? 'bold' : undefined}
                        />
                    ) : null}
                </Box>
                <Box sx={{ flex: '1 1 auto' }}>
                    <Typography
                        component='span'
                        sx={{
                            color: 'inherit',
                            fontSize: '0.875rem',
                            fontWeight: 500,
                            lineHeight: '28px'
                        }}
                    >
                        {title}
                    </Typography>
                </Box>
            </NavItemBox>
        </li>
    );
}
