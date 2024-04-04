import { useNavigate } from 'react-router-dom';
import { logoutAction } from '../../api/api-actions';
import { useAppDispatch } from '../../app/hooks';
import { AppRoutes } from '../../app/routes/routes';
import { AuthorizationStatus } from '../../const';

type TSignButton = {
  authStatus: AuthorizationStatus;
}

const LoginButton = () => (
  <a className="header__nav-link" href={AppRoutes.Login}>
    <span className="header__signout">Sign in</span>
  </a>
);


const LogoutButton = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(logoutAction());
    navigate(AppRoutes.Root);
  };

  return (
    <a className="header__nav-link" onClick={handleClick}>
      <span className="header__signout">Sign out</span>
    </a>
  );
};

export const SignButton = ({ authStatus }: TSignButton) => (
  authStatus === AuthorizationStatus.AUTH ? <LogoutButton /> : <LoginButton />
);
