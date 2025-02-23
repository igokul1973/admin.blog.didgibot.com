import type { IUserContextValue } from '@/contexts/UserContext';
import { UserContext } from '@/contexts/UserContext';
import { useContext } from 'react';

export function useUser(): IUserContextValue {
    const context = useContext(UserContext);

    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
    }

    return context;
}
