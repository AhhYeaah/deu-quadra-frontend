import React, { useEffect, useRef, useState } from 'react';
import landingUrl from '@src/assets/ballin.jpg';
import './LandingPage.css';
import { LoadingPage } from '../Loading/LoadingPage';
import { SimplePage } from '../SimplePage';
import Navbar from '../../../components/Navbar/Navbar';
import { Link } from 'react-router-dom';

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
            <h1 className="text-5xl text-center text-white max-w-screen-lg font-light opacityAndUp">
              Jogue com <span className="text-green-500 font-normal ">estilo</span>,
              reserve com facilidade: a sua quadra esportiva está a{' '}
              <span className="text-green-500 font-normal ">um clique de distância</span>
            </h1>
            <Link
              to="/search"
              className="bg-green-800 hover:bg-green-700 transition-colors px-5 py-3 rounded-md text-white opacityAndUp"
            >
              Buscar por quadras
            </Link>
          </div>
        </section>
      </div>
    </SimplePage>
  );
}
