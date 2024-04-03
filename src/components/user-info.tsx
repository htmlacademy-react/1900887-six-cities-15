import { getUser } from '../services/user';

export const UserInfo = () => {
  const username = getUser();

  return (
    <li className="header__nav-item user">
      <a className="header__nav-link header__nav-link--profile" href="#">
        <div className="header__avatar-wrapper user__avatar-wrapper">
        </div>
        <span className="header__user-name user__name">{username}</span>
        <span className="header__favorite-count">3</span>
      </a>
    </li>
  );
};
