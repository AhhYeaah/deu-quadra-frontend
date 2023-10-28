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
  const [user, setUser] = useState<User>();
  const [tokens, setTokens] = useState<Tokens>();

  const isAuthenticated = tokens !== undefined;

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
