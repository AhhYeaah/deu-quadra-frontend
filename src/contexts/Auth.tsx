import { createContext } from 'react';
import { AuthResult } from '../hooks/Auth';

export const AuthenticationContext = createContext<AuthResult | null>(null);
