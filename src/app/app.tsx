import {Layout} from '../components/layout.tsx';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {NotFound} from '../components/404.tsx';
import {Favorites} from '../pages/favorites.tsx';
import {OfferComponent} from '../pages/offer.tsx';
import {Login} from '../pages/login.tsx';
import {PrivateRoute} from '../components/private-route.tsx';
import {Main} from '../pages/main.tsx';
import { FC } from 'react';
import { OffersInfo } from '../types/offers.ts';

export const App: FC<OffersInfo> = ({offers, reviews}) => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Main offers={offers} />} />
        <Route path='/login' element={<Login />} />
        <Route path='/favorites' element={
          <PrivateRoute isAuth>
            <Favorites offers={offers} />
          </PrivateRoute>
        }
        />
        <Route path='/offer/:id' element={<OfferComponent offers={offers} reviews={reviews}/>} />
      </Route>
      <Route path='*' element={<NotFound/>} />
    </Routes>
  </BrowserRouter>
);
