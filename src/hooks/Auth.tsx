import React, { useEffect, useState } from 'react';

interface TokenWrapper {
  token: string;
  expiresIn: Date;
}

interface Tokens {
  authToken: TokenWrapper;
  refreshToken: TokenWrapper;
}

interface User {
  name: string;
}

export interface AuthResult {
  user: User | undefined;
  tokens: Tokens | undefined;
  isAuthenticated: boolean;
  setUser: React.Dispatch<React.SetStateAction<User | undefined>>;
  setTokens: React.Dispatch<React.SetStateAction<Tokens | undefined>>;
  logOff: () => void;
}

export function useAuth(): AuthResult {
  // Initialize state with values from localStorage if available
  const [user, setUser] = useState<User | undefined>(
    localStorage.getItem('user')
      ? JSON.parse(localStorage.getItem('user') as string)
      : undefined
  );
  const [tokens, setTokens] = useState<Tokens | undefined>(
    localStorage.getItem('tokens')
      ? JSON.parse(localStorage.getItem('tokens') as string)
      : undefined
  );

  const isAuthenticated = tokens !== undefined;

  // Log in local storage whenever user or tokens change
  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);

  useEffect(() => {
    if (tokens) {
      localStorage.setItem('tokens', JSON.stringify(tokens));
    } else {
      localStorage.removeItem('tokens');
    }
  }, [tokens]);

  function logOff() {
    setUser(undefined);
    setTokens(undefined);
  }

  return {
    user,
    tokens,
    isAuthenticated,
    setUser,
    setTokens,
    logOff,
  };
}
