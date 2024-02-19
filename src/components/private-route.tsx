import {Navigate} from 'react-router-dom';

type PrivateRouteProps = {
  children: JSX.Element;
};

export const PrivateRoute = ({children}: PrivateRouteProps): JSX.Element => {
  const isLogged = false;

  return isLogged ? children : <Navigate to={'/login'} />;
};
