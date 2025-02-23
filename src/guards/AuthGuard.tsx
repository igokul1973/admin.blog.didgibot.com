import { useUser } from '@/hooks/use-user';
import { logger } from '@/lib/default-logger';
import { paths } from '@/paths';
import Alert from '@mui/material/Alert';
import { JSX, ReactNode, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

export interface IAuthGuardProps {
    readonly children: ReactNode;
}

export function AuthGuard({ children }: IAuthGuardProps): JSX.Element | null {
    const navigate = useNavigate();
    const { user, error, isLoading } = useUser();
    const [isChecking, setIsChecking] = useState<boolean>(true);

    const checkPermissions = async (): Promise<void> => {
        if (isLoading) {
            return;
        }

        if (error) {
            return setIsChecking(false);
        }

        if (!user) {
            logger.debug('[AuthGuard]: User is not logged in, redirecting to sign in');
            return navigate(paths.auth.signIn);
        }

        setIsChecking(false);
    };

    useEffect(() => {
        checkPermissions().catch(() => {
            // noop
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps -- Expected
    }, [user, error, isLoading]);

    if (isChecking) {
        return null;
    }

    if (error) {
        return <Alert color='error'>{error}</Alert>;
    }

    return <>{children}</>;
}
