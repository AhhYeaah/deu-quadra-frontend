import React, { ReactNode } from 'react';
import './SimplePage.css';

interface SimplePageProp {
  children: ReactNode;
}

export function SimplePage({ children: page }: SimplePageProp) {
  return (
    <div className="flex flex-col min-h-screen ">
      <main className="mainPageContainer flex grow items-stretch ">{page}</main>
    </div>
  );
}
