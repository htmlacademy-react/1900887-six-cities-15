import { FC, PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';
import { AppRoutes } from '../../app/routes/routes';
import { getUser } from '../../services';


export const PrivateRoute: FC<PropsWithChildren> = ({ children }) => {
  const user = getUser();
  return (
    user ? children : <Navigate to={AppRoutes.Login} />
  );
};
