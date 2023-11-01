import { useContext } from 'react';
import { AuthenticationContext } from '../../contexts/Auth';
import defaultPhoto from '@src/assets/default_photo.jpg';
import { Link, useNavigate } from 'react-router-dom';

export function NavbarLoginButton() {
  const auth = useContext(AuthenticationContext);
  const navigate = useNavigate();

  if (auth?.isAuthenticated) {
    return (
      <div className="flex flex-row gap-4">
        <div className="flex flex-col items-end">
          <div className="text-sm">
            Bem vindo, <span className="font-bold">Matheus</span>
          </div>
          <button
            onClick={() => {
              auth.logOff();
              navigate('/');
            }}
            className="text-xs underline"
          >
            Deslogar
          </button>
        </div>
        <div>
          <img src={defaultPhoto} className="w-[35px] rounded-full" alt="" />
        </div>
      </div>
    );
  } else {
    return (
      <Link
        className=" px-6 py-2 border rounded-md border-green-900 text-green-900"
        to="/login"
      >
        Entre
      </Link>
    );
  }
}
