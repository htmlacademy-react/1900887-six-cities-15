import { Layout } from '../../components/layout.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NotFound } from '../../components/404.tsx';
import { Favorites } from '../../pages/favorites/index';
// import { OfferComponent } from '../../pages/offer.tsx';
import { Login } from '../../pages/login/login.tsx';
import { PrivateRoute } from '../../components/private-route.tsx';
import { Main } from '../../pages/main/main.tsx';
import { AppRoutes } from '../routes/routes.ts';
import { OfferComponent } from '../../pages/offer/offer.tsx';
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
