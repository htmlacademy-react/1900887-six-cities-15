import {Layout} from '../components/layout.tsx';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {NotFound} from '../components/404.tsx';
import {Favorites} from '../pages/favorites.tsx';
import {Offer} from '../pages/offer.tsx';
import {Login} from '../pages/login.tsx';
import {PrivateRoute} from '../components/private-route.tsx';
import {Main} from '../pages/main.tsx';

export const App = ({props}: {props: number}) => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Main offersCount={props} />} />
        <Route path='/login' element={<Login />} />
        <Route path='/favorites' element={
          <PrivateRoute>
            <Favorites />
          </PrivateRoute>
        }
        />
        <Route path='/offer/:id' element={<Offer />} />
      </Route>
      <Route path='*' element={<NotFound/>} />
    </Routes>
  </BrowserRouter>
);
