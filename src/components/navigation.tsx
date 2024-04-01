import { AppRoutes } from '../app/routes/routes';
import { AuthorizationStatus } from '../const';
import { UserInfo } from './user-info';
type TNavigation = {
  authStatus: AuthorizationStatus;
}
export const Navigation = ({ authStatus }: TNavigation) => (
  <nav className="header__nav">
    <ul className="header__nav-list">
      {authStatus === AuthorizationStatus.AUTH && <UserInfo />}
      <li className="header__nav-item">
        <a className="header__nav-link" href={AppRoutes.Login}>
          <span className="header__signout">Sign in</span>
        </a>
      </li>
    </ul>
  </nav>
);
