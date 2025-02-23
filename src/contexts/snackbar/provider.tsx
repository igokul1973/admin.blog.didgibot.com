import { FC, PropsWithChildren, createContext, useContext, useState } from 'react';
import { ISnackbarState } from './types';

const SnackbarContext = createContext<ISnackbarState>({
    isOpen: false,
    severity: undefined,
    message: '',
    openSnackbar: () => {},
    closeSnackbar: () => {}
});

const SnackbarProvider: FC<PropsWithChildren> = ({ children }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [message, setMessage] = useState<ISnackbarState['message']>('');
    const [severity, setSeverity] = useState<ISnackbarState['severity']>();

    const openSnackbar = (
        message: ISnackbarState['message'],
        severity: ISnackbarState['severity']
    ) => {
        setMessage(message);
        setIsOpen(true);
        setSeverity(severity);
    };

    const closeSnackbar = () => {
        setIsOpen(false);
    };

    return (
        <SnackbarContext.Provider
            value={{ isOpen, message, severity, openSnackbar, closeSnackbar }}
        >
            {children}
        </SnackbarContext.Provider>
    );
};

export const useSnackbar = () => {
    const context = useContext(SnackbarContext);
    if (!context) {
        throw new Error('useSnackbar must be used within a SnackbarProvider');
    }
    return context;
};

export { SnackbarContext, SnackbarProvider };
