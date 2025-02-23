import { AlertColor, AlertPropsColorOverrides } from '@mui/material/Alert';
import { OverridableStringUnion } from '@mui/types';
import { ReactNode } from 'react';

export interface ISnackbarState {
    isOpen: boolean;
    message: string | ReactNode;
    severity?: OverridableStringUnion<AlertColor, AlertPropsColorOverrides>;
    openSnackbar: (
        message: string | ReactNode,
        severity?: OverridableStringUnion<AlertColor, AlertPropsColorOverrides>
    ) => void;
    closeSnackbar: () => void;
}
