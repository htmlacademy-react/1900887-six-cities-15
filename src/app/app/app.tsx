import { Layout } from '../../components/layout.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NotFound } from '../../components/404.tsx';
import { Favorites } from '../../pages/favorites.tsx';
// import { OfferComponent } from '../../pages/offer.tsx';
import { Login } from '../../pages/login.tsx';
import { PrivateRoute } from '../../components/private-route.tsx';
import { Main } from '../../pages/main.tsx';
import { AppRoutes } from '../routes/routes.ts';
import { OfferComponent } from '../../pages/offer.tsx';

export const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path={AppRoutes.Root} element={<Layout />}>
        <Route index element={<Main />} />
        <Route path={AppRoutes.Login} element={<Login />} />
        <Route path={AppRoutes.Favourites} element={
          <PrivateRoute isAuth>
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
