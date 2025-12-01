import { createContext } from 'react';
import type { IUserContextValue } from './types';

export const UserContext = createContext<IUserContextValue | undefined>(undefined);
