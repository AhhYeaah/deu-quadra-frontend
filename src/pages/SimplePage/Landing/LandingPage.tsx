import React, { useEffect, useRef, useState } from 'react';
import landingUrl from '@src/assets/ballin.jpg';
import './LandingPage.css';
import { LoadingPage } from '../Loading/LoadingPage';
import { SimplePage } from '../SimplePage';
import Navbar from '../../../components/Navbar/Navbar';
import { Link } from 'react-router-dom';
import { MainTitle } from './MainTitle';
import { SearchButton } from './SearchButton';

export function LandingPage() {
  const [loading, setIsLoading] = useState(true);

  const img = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const image = new Image();
    image.src = landingUrl;

    image.addEventListener('load', () => {
      setIsLoading(false);
    });
  });

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <SimplePage>
      <div>
        <section className="flex-center h-screen">
          <Navbar className="fade-in"></Navbar>

          <div className="absolute top-0 left-0 -z-10 pointer-events-none overflow-hidden">
            <img
              ref={img}
              className={'w-screen h-screen object-fill scale-105 blurAndDarken'}
              src={landingUrl}
              alt=""
            />
          </div>
          <div className="flex-center flex-col gap-10">
            <MainTitle></MainTitle>
            <SearchButton></SearchButton>
          </div>
        </section>
      </div>
    </SimplePage>
  );
}
