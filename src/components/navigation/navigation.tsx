import { AuthorizationStatus } from '../../const';
import { UserInfo } from '../user-info';
import { SignButton } from './sign-button';
type TNavigation = {
  authStatus: AuthorizationStatus;
}
export const Navigation = ({ authStatus }: TNavigation) => (
  <nav className="header__nav">
    <ul className="header__nav-list">
      {authStatus === AuthorizationStatus.AUTH && <UserInfo />}
      <li className="header__nav-item">
        <SignButton authStatus={authStatus} />
      </li>
    </ul>
  </nav>
);
