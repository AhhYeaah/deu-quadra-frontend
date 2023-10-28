import React, { Component, useContext } from 'react';
import { Route, RouteProps, Navigate } from 'react-router-dom';
import { AuthenticationContext } from '../contexts/Auth';

export function GuardedRoute({ children }: { children: JSX.Element }) {
  const auth = useContext(AuthenticationContext);

  if (auth?.isAuthenticated) {
    return children;
  } else {
    return <Navigate to="/login"></Navigate>;
  }
}
