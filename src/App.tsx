import React, { Suspense } from 'react';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { HomePage } from './pages/SimplePage/Home/HomePage';
import { SimplePage } from './pages/SimplePage/SimplePage';
import { WorkPage } from './pages/SimplePage/Work/WorkPage';

export function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <SimplePage>
          <HomePage />
        </SimplePage>
      ),
    },
    {
      path: '/login',
      element: (
        <SimplePage>
          <WorkPage />
        </SimplePage>
      ),
    },
    {
      path: '*',
      element: (
        <div className='flex-center h-screen w-screen'>
          <span>Not found</span>
        </div>
      ),
    },
  ])

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}
