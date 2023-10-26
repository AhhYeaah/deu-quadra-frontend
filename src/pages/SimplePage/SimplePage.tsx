import React, { ReactNode } from 'react';
import './SimplePage.css';

interface SimplePageProp {
  children: ReactNode;
  isNavBarDark?: boolean;
}

export function SimplePage({ children: page, isNavBarDark = false }: SimplePageProp) {
  window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="flex flex-col min-h-screen">
      <main className="mainPageContainer flex grow items-stretch ">{page}</main>
    </div>
  );
}
