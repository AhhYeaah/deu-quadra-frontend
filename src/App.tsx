import React, { Suspense, createContext, useState } from 'react';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { HomePage, SearchPage } from './pages/SimplePage/Search/SearchPage';
import { SimplePage } from './pages/SimplePage/SimplePage';
import { WorkPage } from './pages/SimplePage/Work/WorkPage';
import { AuthResult, useAuth } from './hooks/Auth';
import { GuardedRoute } from './routes/GuardedRoutes';
import { AuthenticationContext } from './contexts/Auth';
import { LoginPage } from './pages/SimplePage/Login/LoginPage';

import { Modal } from '@components/Modal/Modal';
import { ModalProvider } from '@components/Modal/ModalProvider';
import { LandingPage } from './pages/SimplePage/Landing/LandingPage';
import { AllocatePage } from './pages/SimplePage/Allocate/AllocatePage';
import { LanguageContext } from './contexts/Language';
import { LanguageProvider } from './hooks/Language';

export function App() {
  const authentication = useAuth();

  return (
    <div>
      <ModalProvider>
        <LanguageProvider>
          <AuthenticationContext.Provider value={authentication}>
            <Modal />
            <Router>
              <Routes>
                <Route path="/" element={<LandingPage />}></Route>
                <Route path="/login" element={<LoginPage />}></Route>
                <Route path="/search" element={<SearchPage />} />
                <Route
                  path="/allocate/:id"
                  element={
                    <GuardedRoute>
                      <AllocatePage />
                    </GuardedRoute>
                  }
                />
              </Routes>
            </Router>
          </AuthenticationContext.Provider>
        </LanguageProvider>
      </ModalProvider>
    </div>
  );
}
