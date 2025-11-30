import { UserContext } from '@/contexts/user/UserContext';
import type { IUserContextValue } from '@/contexts/user/UserProvider';
import { useContext } from 'react';

export function useUser(): IUserContextValue {
    const context = useContext(UserContext);

    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
    }

    return context;
}
