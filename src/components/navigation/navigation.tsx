import { useAppSelector } from '../../app/hooks';
import { UserInfo } from '../user-info';
import { SignButton } from '../sign-button';
import { getCurrentUser, getIsAuth } from '../../store/user-process/user-process-selectors';

export const Navigation = () => {
  const user = useAppSelector(getCurrentUser);
  const isAuth = useAppSelector(getIsAuth);

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
