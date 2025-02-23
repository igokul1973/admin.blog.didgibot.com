import { Tooltip } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { HTMLAttributes } from 'react';
import { Link } from 'react-router';
import { IBaseLinkIconButtonProps } from './types';

export default function BaseLinkIconButton({
    href,
    icon,
    ariaLabel,
    title,
    color = 'primary',
    ...props
}: Readonly<
    IBaseLinkIconButtonProps & {
        title: HTMLAttributes<HTMLButtonElement>['title'];
    }
>) {
    const Icon = icon;
    return (
        <Tooltip title={title}>
            <IconButton component={Link} to={href} color={color} aria-label={ariaLabel} {...props}>
                <Icon />
            </IconButton>
        </Tooltip>
    );
}
