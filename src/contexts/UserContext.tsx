import { authClient } from '@/lib/auth/AuthClient';
import { logger } from '@/lib/default-logger';
import type { IUser } from '@/types/user';
import { createContext, JSX, ReactNode, useCallback, useEffect, useState } from 'react';

export interface IUserContextValue {
    user: IUser | null;
    error: string | null;
    isLoading: boolean;
    checkSession: () => Promise<void>;
}

export const UserContext = createContext<IUserContextValue | undefined>(undefined);

export interface UserProviderProps {
    readonly children: ReactNode;
}

export function UserProvider({ children }: UserProviderProps): JSX.Element {
    const [state, setState] = useState<{
        user: IUser | null;
        error: string | null;
        isLoading: boolean;
    }>({
        user: null,
        error: null,
        isLoading: true
    });

    const checkSession = useCallback(async (): Promise<void> => {
        try {
            const { data, error } = await authClient.getUser();

            if (error) {
                logger.error(error);
                return setState((prev) => ({
                    ...prev,
                    user: null,
                    error: 'Something went wrong',
                    isLoading: false
                }));
            }

            setState((prev) => ({ ...prev, user: data ?? null, error: null, isLoading: false }));
        } catch (err) {
            logger.error(err);
            setState((prev) => ({
                ...prev,
                user: null,
                error: 'Something went wrong',
                isLoading: false
            }));
        }
    }, []);

    useEffect(() => {
        checkSession().catch((err: unknown) => {
            logger.error(err);
            // noop
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps -- Expected
    }, []);

    return (
        <UserContext.Provider value={{ ...state, checkSession }}>{children}</UserContext.Provider>
    );
}

export const UserConsumer = UserContext.Consumer;
