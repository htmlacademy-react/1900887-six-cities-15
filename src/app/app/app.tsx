import { Layout } from '../../components/layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NotFound } from '../../components/404';
import { Favorites } from '../../pages/favorites/index';
import { Login } from '../../pages/login';
import { PrivateRoute } from '../../components/private-route';
import { Main } from '../../pages/main';
import { AppRoutes } from '../routes/routes.ts';
import { OfferComponent } from '../../pages/offer';
import { useAppSelector } from '../hooks/index.ts';
import { getAuthorizationStatus } from '../../store/selectors.ts';

export const App = () => {
  const authStatus = useAppSelector(getAuthorizationStatus);
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoutes.Root} element={<Layout />}>
          <Route index element={<Main />} />
          <Route path={AppRoutes.Login} element={<Login />} />
          <Route path={AppRoutes.Favourites} element={
            <PrivateRoute authStatus={authStatus}>
              <Favorites />
            </PrivateRoute>
          }
          />
          <Route path={`${AppRoutes.Offer}/:id`} element={<OfferComponent />} />
        </Route>
        <Route path={AppRoutes.Everything} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
