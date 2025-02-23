import { INavItemConfig } from '@/types/nav';
import { Stack } from '@mui/material';
import { JSX, ReactNode } from 'react';
import NavItem from '../nav-item/NavItem';

export function renderNavItems({
    items = [],
    pathname,
    onClose
}: {
    items?: INavItemConfig[];
    pathname: string;
    onClose: () => void;
}): JSX.Element {
    const children = items.reduce((acc: ReactNode[], curr: INavItemConfig): React.ReactNode[] => {
        const { key, ...item } = curr;

        acc.push(<NavItem key={key} pathname={pathname} onClose={onClose} {...item} />);

        return acc;
    }, []);

    return (
        <Stack component='ul' spacing={1} sx={{ listStyle: 'none', m: 0, p: 0 }}>
            {children}
        </Stack>
    );
}
