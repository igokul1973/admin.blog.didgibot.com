import { authClient } from '@/lib/auth/AuthClient';
import type { IUser } from '@/types/user';
import { JSX, useCallback, useMemo, useState } from 'react';
import { UserContext } from './UserContext';
import { UserProviderProps } from './types';

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
