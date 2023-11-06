import React, { useContext } from 'react';
import { LanguageContext } from '@src/contexts/Language';
import { Link } from 'react-router-dom';

export function SearchButton() {
  const languageContext = useContext(LanguageContext)!;

  return (
    <Link
      to="/search"
      className="bg-green-800 hover:bg-green-700 transition-colors px-5 py-3 rounded-md text-white opacityAndUp"
    >
      {languageContext?.language.mainTitleButton}
    </Link>
  );
}
