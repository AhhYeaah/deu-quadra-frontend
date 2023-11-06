import React, { FormEvent, useContext, useEffect, useState } from 'react';
import TextInput from '@components/TextInput';
import { useModal } from '@src/hooks/Modal';
import { useApi } from '@src/api/api';
import { useNavigate } from 'react-router-dom';
import { AuthenticationContext } from '../../../../contexts/Auth';
import { LanguageContext } from '../../../../contexts/Language';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const auth = useContext(AuthenticationContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (auth?.isAuthenticated) {
      navigate('/');
    }
  }, []);
  console.log(auth);

  const { login } = useApi();
  const { openModal } = useModal();
  const { language } = useContext(LanguageContext)!;

  function handleLogin(event: FormEvent) {
    event.preventDefault();

    login(email, password)
      .then(({ data }) => {
        auth!.setTokens({
          authToken: {
            token: data.accessToken,
            expiresIn: new Date(),
          },
          refreshToken: {
            expiresIn: new Date(),
            token: 'a',
          },
        });

        navigate('/');
      })
      .catch((error: any) => {
        openModal('Erro', error.response.data.message);
      });
  }

  return (
    <div className="p-6 bg-white shadow-md rounded-lg mb-3">
      <h2 className="text-2xl font-semibold mb-4 text-center">Login</h2>
      <form onSubmit={handleLogin}>
        <TextInput
          label="Email"
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={language.emailButtonPlaceholder}
        />
        <TextInput
          label={language.passwordLabel}
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder={language.passwordButtonPlaceholder}
        />
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-green-500 text-white p-2 rounded-md mt-3 mx-auto hover:bg-green-600"
          >
            {language.LoginPageButton}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
