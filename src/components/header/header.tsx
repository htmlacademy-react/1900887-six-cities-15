import { getIsLoginPage } from '../../utils.ts';
import { Logo } from '../logo';
import { Navigation } from '../navigation';

export const Header = () => {
  const isLoginPage = getIsLoginPage(location.pathname);

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <Logo />
          {!isLoginPage && <Navigation />}
        </div>
      </div>
    </header>
  );
};
