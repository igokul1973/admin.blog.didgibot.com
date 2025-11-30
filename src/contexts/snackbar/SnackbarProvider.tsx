import { FC, PropsWithChildren, useCallback, useMemo, useState } from 'react';
import { SnackbarContext } from './SnackbarContext';
import { ISnackbarState } from './types';

export const SnackbarProvider: FC<PropsWithChildren> = ({ children }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [message, setMessage] = useState<ISnackbarState['message']>('');
    const [severity, setSeverity] = useState<ISnackbarState['severity']>();

    const openSnackbar = useCallback(
        (message: ISnackbarState['message'], severity: ISnackbarState['severity'] = 'info') => {
            setMessage(message);
            setIsOpen(true);
            setSeverity(severity);
        },
        []
    );

    const closeSnackbar = useCallback(() => {
        setIsOpen(false);
    }, []);
    const value = useMemo(
        () => ({
            isOpen,
            message,
            severity,
            openSnackbar,
            closeSnackbar
        }),
        [isOpen, message, severity, openSnackbar, closeSnackbar]
    );
    return <SnackbarContext.Provider value={value}>{children}</SnackbarContext.Provider>;
};
