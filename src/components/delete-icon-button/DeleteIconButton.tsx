import DeleteIcon from '@mui/icons-material/DeleteOutlineOutlined';
import IconButton, { IconButtonOwnProps } from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { HTMLAttributes } from 'react';

export function DeleteIconButton({
    color,
    title,
    onClick,
    ...props
}: IconButtonOwnProps & {
    onClick: () => void;
    title?: HTMLAttributes<HTMLButtonElement>['title'];
}) {
    return (
        <Tooltip title={title ?? 'delete'}>
            <IconButton color={color ?? 'warning'} aria-label='edit' onClick={onClick} {...props}>
                <DeleteIcon />
            </IconButton>
        </Tooltip>
    );
}
