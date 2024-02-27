import { FC, PropsWithChildren } from 'react';
import {Navigate} from 'react-router-dom';

type PrivateRouteProps = {
  isAuth: boolean;
};

export const PrivateRoute: FC<PropsWithChildren<PrivateRouteProps>> = ({children, isAuth}) => (
  isAuth ? children : <Navigate to={'/login'} />
);
