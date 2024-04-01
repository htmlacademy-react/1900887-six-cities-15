import { Header } from './header.tsx';
import { Outlet, useLocation } from 'react-router-dom';
import { getClassNameByLocation } from '../utils.ts';

export const Layout = (): JSX.Element => {
  const location = useLocation();
  const className = getClassNameByLocation(location.pathname);
  return (
    <div className={`page page--gray ${className}`}>
      <Header />
      <Outlet />
    </div>
  );
};
