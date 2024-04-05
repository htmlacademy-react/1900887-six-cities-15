import { TAuthInfo } from '../../types/state';
type TUserInfo = {
  user: TAuthInfo;
}
export const UserInfo = ({ user }: TUserInfo) => {
  const { email, avatarUrl } = user;

  return (
    <li className="header__nav-item user">
      <a className="header__nav-link header__nav-link--profile" href="#">
        <div className="header__avatar-wrapper user__avatar-wrapper">
          <img src={avatarUrl} alt="avatar" className='avatar' />
        </div>
        <span className="header__user-name user__name">{email}</span>
        <span className="header__favorite-count">3</span>
      </a>
    </li>
  );
};
