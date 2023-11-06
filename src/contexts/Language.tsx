import { createContext } from 'react';

export interface LanguageContextType {
  courstToRent: (distance: number, city: string) => string;
  searchPageTextFieldPlaceholder: string;
  LoginButtonNavbar: string;
  mainTitle: string;
  mainTitleButton: string;
  emailButtonPlaceholder: string;
  passwordButtonPlaceholder: string;
  LoginPageButton: string;
  logOff: string;
  welcome: string;
  changeLanguage: string;
  passwordLabel: string;
  cardButtonAction: string;
}

export const ptBr: LanguageContextType = {
  courstToRent: (distance, city) =>
    `Quadras para alugar a ${distance} km ou menos de ${city}.`,
  searchPageTextFieldPlaceholder: 'Localização',
  LoginButtonNavbar: 'Entrar',
  mainTitle:
    'Jogue com estilo, reserve com facilidade: a sua quadra esportiva está a um clique de distância',
  mainTitleButton: 'Buscar por quadras',
  emailButtonPlaceholder: 'Seu email',
  passwordButtonPlaceholder: 'Sua senha',
  LoginPageButton: 'Entrar',
  logOff: 'Deslogar',
  welcome: 'Bem vindo, ',
  changeLanguage: 'Mudar idioma',
  passwordLabel: 'Senha',
  cardButtonAction: 'Alugar',
};

export const enUS: LanguageContextType = {
  courstToRent: (distance, city) =>
    `Courts to rent within ${distance} km or less of ${city}.`,
  searchPageTextFieldPlaceholder: 'Location',
  LoginButtonNavbar: 'Log In',
  mainTitle: 'Play in style, book with ease: your sports court is just a click away',
  mainTitleButton: 'Search for courts',
  emailButtonPlaceholder: 'Your email',
  passwordButtonPlaceholder: 'Your password',
  LoginPageButton: 'Log In',
  logOff: 'Log off',
  welcome: 'Welcome, ',
  changeLanguage: 'Change language',
  passwordLabel: 'Password',
  cardButtonAction: 'Rent',
};

export const LanguageContext = createContext<{
  language: LanguageContextType;
  handleLanguageChange: Function;
} | null>(null);
