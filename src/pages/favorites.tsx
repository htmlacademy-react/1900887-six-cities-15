import { FC } from 'react';
import { FavoriteOffers } from '../types/offers';
import { FavoritesList } from '../components/favorites';

export const Favorites: FC<FavoriteOffers> = ({offers}) => (
  <main className="page__main page__main--favorites">
    <div className="page__favorites-container container">
      <section className="favorites">
        <h1 className="favorites__title">Saved listing</h1>
        <FavoritesList offers={offers}/>
      </section>
    </div>
  </main>
);
