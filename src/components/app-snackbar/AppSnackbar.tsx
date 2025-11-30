import { useSnackbar } from '@/hooks/use-snackbar';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton, Snackbar, SnackbarCloseReason, useTheme } from '@mui/material';

export function AppSnackbar() {
    const theme = useTheme();
    const { closeSnackbar, isOpen, severity, message } = useSnackbar();

    const colors = () => {
        switch (severity) {
            case 'success':
                return {
                    backgroundColor: theme.palette.success.main,
                    color: 'white'
                };
            case 'info':
                return {
                    backgroundColor: theme.palette.info.main,
                    color: 'white'
                };
            case 'warning':
                return {
                    backgroundColor: theme.palette.warning.main,
                    color: 'white'
                };
            case 'error':
                return {
                    backgroundColor: theme.palette.error.main,
                    color: 'white'
                };

            default:
                return {
                    backgroundColor: 'blue',
                    color: 'white'
                };
        }
    };

    const handleClose = (_: React.SyntheticEvent | Event, reason?: SnackbarCloseReason) => {
        if (reason === 'clickaway') {
            return;
        }

        closeSnackbar();
    };

    const action = (
        <IconButton size='small' aria-label='close' color='inherit' onClick={handleClose}>
            <CloseIcon fontSize='small' />
        </IconButton>
    );

    return (
        <Snackbar
            ContentProps={{
                sx: { ...colors() }
            }}
            open={isOpen}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            autoHideDuration={6000}
            onClose={handleClose}
            message={message}
            action={action}
        />
    );
}
