import { ButtonOwnProps } from '@mui/material/Button';
import { IconButtonOwnProps } from '@mui/material/IconButton';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { SvgIconTypeMap } from '@mui/material/SvgIcon';
import { FormHTMLAttributes } from 'react';

// Regular buttons
export interface IBaseButtonProps extends ButtonOwnProps {
    name?: string;
}

export interface IBaseFormActionButtonProps extends IBaseButtonProps {
    action: Omit<FormHTMLAttributes<Element>['action'], 'undefined'>;
    actionArgs?: FormData;
}

export interface IBaseLinkButtonProps extends IBaseButtonProps {
    href: string;
}

// Icon buttons
export interface IBaseIconButtonProps extends IconButtonOwnProps {
    icon: OverridableComponent<SvgIconTypeMap> & { muiName: string };
}

export interface IBaseFormActionIconButtonProps extends IBaseIconButtonProps {
    action: Omit<FormHTMLAttributes<Element>['action'], 'undefined'>;
    actionArgs?: FormData;
    ariaLabel: string;
}

export interface IBaseLinkIconButtonProps extends IBaseIconButtonProps {
    href: string;
    ariaLabel: string;
}
