import { logoutAction } from '../../api/api-actions';
import { useAppDispatch } from '../../app/hooks';
import { AppRoutes } from '../../app/routes/routes';

type TSignButton = {
  authStatus: boolean;
}

const LoginButton = () => (
  <a className="header__nav-link" href={AppRoutes.Login}>
    <span className="header__signout">Sign in</span>
  </a>
);


const LogoutButton = () => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(logoutAction());
  };

  return (
    <a className="header__nav-link" onClick={handleClick}>
      <span className="header__signout">Sign out</span>
    </a>
  );
};

export const SignButton = ({ authStatus }: TSignButton) => (authStatus ? <LogoutButton /> : <LoginButton />);
