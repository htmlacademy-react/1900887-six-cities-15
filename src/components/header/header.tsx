import { useAppSelector } from '../../app/hooks/index.ts';
import { getAuthorizationStatus } from '../../store/selectors.ts';
import { getIsLoginPage } from '../../utils.ts';
import { Logo } from '../logo';
import { Navigation } from '../navigation';

export const Header = () => {
  const authStatus = useAppSelector(getAuthorizationStatus);
  const isLoginPage = getIsLoginPage(location.pathname);

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <Logo />
          {!isLoginPage && <Navigation authStatus={authStatus} />}
        </div>
      </div>
    </header>
  );
};
