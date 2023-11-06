import { useContext } from 'react';
import { LanguageContext, ptBr } from '../../../contexts/Language';

export function MainTitle() {
  const languageContext = useContext(LanguageContext)!;

  if (languageContext.language === ptBr) {
    return (
      <h1 className="text-5xl text-center text-white max-w-screen-lg font-light opacityAndUp">
        Jogue com <span className="text-green-500 font-normal ">estilo</span>, reserve com
        facilidade: a sua quadra esportiva está a{' '}
        <span className="text-green-500 font-normal ">um clique de distância</span>
      </h1>
    );
  } else {
    return (
      <h1 className="text-5xl text-center text-white max-w-screen-lg font-light opacityAndUp">
        Play with <span className="text-green-500 font-normal">style</span>, book with
        ease: your sports court is just{' '}
        <span className="text-green-500 font-normal">a click away</span>
      </h1>
    );
  }
}
