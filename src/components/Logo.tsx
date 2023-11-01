import React from 'react';

interface LogoProps {
  lightMode?: boolean;
}

export function Logo({ lightMode = true }: LogoProps) {
  return (
    <div className={`text-2xl ${lightMode ? 'text-white' : 'text-black'}`}>
      <span>deu</span>
      <span className={lightMode ? 'text-green-900' : 'text-green-200'}>Quadra</span>
    </div>
  );
}
