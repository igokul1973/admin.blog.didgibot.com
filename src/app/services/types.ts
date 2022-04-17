import { MatSnackBarConfig } from '@angular/material/snack-bar';

export interface ISnackbarData {
    message: string;
    header?: string;
}
export type TSnackbarType = 'success' | 'info' | 'warning' | 'error';
export type TSnackbar = MatSnackBarConfig<ISnackbarData> & {
    id: number;
    duration: number;
    type: TSnackbarType;
    isShow: boolean;
};
export type TSnackbarArguments = { data: ISnackbarData; type?: TSnackbarType; duration?: TSnackbar['duration'] };
