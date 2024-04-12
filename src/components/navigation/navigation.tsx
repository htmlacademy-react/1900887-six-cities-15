import { useAppSelector } from '../../app/hooks';
import { AuthorizationStatus } from '../../const';
import { UserInfo } from '../user-info';
import { SignButton } from '../sign-button';
import { getCurrentUser } from '../../store/user-process/user-process-selectors';

type TNavigation = {
  authStatus: AuthorizationStatus;
}

export const Navigation = ({ authStatus }: TNavigation) => {
  const user = useAppSelector(getCurrentUser);
  const isAuth = authStatus === AuthorizationStatus.AUTH;

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        {user && <UserInfo user={user} />}
        <li className="header__nav-item">
          <SignButton authStatus={isAuth} />
        </li>
      </ul>
    </nav>
  );
};
