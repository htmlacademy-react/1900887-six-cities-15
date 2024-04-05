import { Header } from '../header';
import { Outlet, useLocation } from 'react-router-dom';
import { getClassNameByLocation } from '../../utils.ts';

export const Layout = () => {
  const location = useLocation();
  const className = getClassNameByLocation(location.pathname);
  return (
    <div className={`page page--gray ${className}`}>
      <Header />
      <Outlet />
    </div>
  );
};
