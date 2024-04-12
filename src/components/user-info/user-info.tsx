import { Link } from 'react-router-dom';
import { AppRoutes } from '../../app/routes';
import { TAuthInfo } from '../../types/state';
import { useAppSelector } from '../../app/hooks';
import { getFavoriteOffers } from '../../store/app-data/app-data-selectors';

type TUserInfo = {
  user: TAuthInfo;
}

export const UserInfo = ({ user }: TUserInfo) => {
  const { email, avatarUrl } = user;
  const favorites = useAppSelector(getFavoriteOffers);

  return (
    <li className="header__nav-item user">
      <div className="header__nav-link header__nav-link--profile">
        <div className="header__avatar-wrapper user__avatar-wrapper">
          <img src={avatarUrl} alt="avatar" className='avatar' />
        </div>
        <span className="header__user-name user__name">
          <Link to={AppRoutes.Favorites}>
            {email}
          </Link>
        </span>
        <span className="header__favorite-count">{favorites?.length}</span>
      </div>
    </li>
  );
};
