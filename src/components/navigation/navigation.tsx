import { useAppSelector } from '../../app/hooks';
import { AuthorizationStatus } from '../../const';
import { getCurrentUser } from '../../store/selectors';
import { UserInfo } from '../user-info';
import { SignButton } from '../sign-button';

type TNavigation = {
  authStatus: AuthorizationStatus;
}

export const Navigation = ({ authStatus }: TNavigation) => {
  const user = useAppSelector(getCurrentUser);
  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        {user && <UserInfo user={user} />}
        <li className="header__nav-item">
          <SignButton authStatus={authStatus} />
        </li>
      </ul>
    </nav>
  );
};
