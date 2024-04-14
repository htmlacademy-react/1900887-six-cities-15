import { FC, PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';
import { AppRoutes } from '../../app/routes/routes';
import { useAppSelector } from '../../app/hooks';
import { getCurrentUser } from '../../store/user-process/user-process-selectors';


export const PrivateRoute: FC<PropsWithChildren> = ({ children }) => {
  const user = useAppSelector(getCurrentUser);
  return (
    user ? children : <Navigate to={AppRoutes.Login} />
  );
};
