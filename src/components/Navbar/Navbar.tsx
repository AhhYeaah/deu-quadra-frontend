import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../Logo';
import { AuthenticationContext } from '../../contexts/Auth';
import { NavbarLoginButton } from './NavbarLoginButton';
import LanguageSelector from './LanguageSelector';

export interface NavbarProps {
  className?: string;
}

function Navbar({ className }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const auth = useContext(AuthenticationContext);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={'h-[80px] bg-slate-100 ' + className}>
      <nav
        className={`fixed top-0 left-0 w-full bg-green-500 p-4 h-[80px] transition-transform ${
          isScrolled ? '-translate-y-full' : ''
        }`}
      >
        <div className="container max-w-screen-lg mx-auto px-10 h-full flex items-center justify-between">
          <Link to="/">
            <Logo lightMode={true}></Logo>
          </Link>
          <div>
            <NavbarLoginButton />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
