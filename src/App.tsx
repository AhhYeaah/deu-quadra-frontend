import React, { Suspense, createContext, useState } from 'react';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { HomePage } from './pages/SimplePage/Home/HomePage';
import { SimplePage } from './pages/SimplePage/SimplePage';
import { WorkPage } from './pages/SimplePage/Work/WorkPage';
import { AuthResult, useAuth } from './hooks/Auth';
import { GuardedRoute } from './routes/GuardedRoutes';
import { AuthenticationContext } from './contexts/Auth';
import { LoginPage } from './pages/SimplePage/Login/LoginPage';

export function App() {
  const authentication = useAuth();

  return (
    <div>
      <AuthenticationContext.Provider value={authentication}>
        <Router>
          <Routes>
            <Route path="/" Component={HomePage}></Route>
            <Route path="/login" Component={LoginPage}></Route>
            <Route
              path="/protected"
              element={
                <GuardedRoute>
                  <WorkPage />
                </GuardedRoute>
              }
            />
          </Routes>
        </Router>
      </AuthenticationContext.Provider>
    </div>
  );
}
