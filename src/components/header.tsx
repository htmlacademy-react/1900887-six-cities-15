import { Logo } from './logo.tsx';
import { Navigation } from './sign.tsx';

export const Header = () => (
  <header className="header">
    <div className="container">
      <div className="header__wrapper">
        <Logo />
        <Navigation />
      </div>
    </div>
  </header>
);
