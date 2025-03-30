import { authClient } from '@/lib/auth/AuthClient';
import type { IUser } from '@/types/user';
import { createContext, JSX, ReactNode, useCallback, useMemo, useState } from 'react';

export interface IUserContextValue {
    user: IUser | null;
    setUserStateFromStorage: () => void;
}

export const UserContext = createContext<IUserContextValue | undefined>(undefined);

export interface UserProviderProps {
    readonly children: ReactNode;
    readonly initialState: { user: IUser | null };
}

export function UserProvider({ initialState, children }: UserProviderProps): JSX.Element {
    const [state, setState] = useState<{
        user: IUser | null;
    }>({
        user: initialState.user
    });

    const setUserStateFromStorage = useCallback((): void => {
        const { user } = authClient.getUser();
        setState({ user });
    }, []);

    const contextValue = useMemo(
        () => ({ ...state, setUserStateFromStorage }),
        [state, setUserStateFromStorage]
    );

    return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
}

export const UserConsumer = UserContext.Consumer;
