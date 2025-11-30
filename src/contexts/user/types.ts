import { IUser } from '@/types/user';

export interface IUserContextValue {
    user: IUser | null;
    setUserStateFromStorage: () => void;
}

export interface UserProviderProps {
    readonly children: React.ReactNode;
    readonly initialState: { user: IUser | null };
}
