import { FC, PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthorizationStatus } from '../const';

type PrivateRouteProps = {
  authStatus: AuthorizationStatus;
};

export const PrivateRoute: FC<PropsWithChildren<PrivateRouteProps>> = ({ children, authStatus }) => (
  authStatus === AuthorizationStatus.AUTH ? children : <Navigate to={'/login'} />
);
