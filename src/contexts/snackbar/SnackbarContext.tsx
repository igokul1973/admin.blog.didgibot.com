import { createContext } from 'react';
import { ISnackbarState } from './types';

export const SnackbarContext = createContext<ISnackbarState>({
    isOpen: false,
    severity: undefined,
    message: '',
    openSnackbar: () => {},
    closeSnackbar: () => {}
});
