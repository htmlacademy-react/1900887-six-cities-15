import { FC } from 'react';
import { FavoriteOffers } from '../../types/offers';
import { FavoriteLocationItem } from '../favorite-location-item';
import { FavoritesEmpty } from '../favorites-empty';

export const FavoritesList: FC<FavoriteOffers> = ({ offers }) => {

  if (!offers) {
    return <FavoritesEmpty />;
  }

  return (
    <ul className="favorites__list">
      {offers.map((item) => <FavoriteLocationItem key={item.id} offer={item} />)}
    </ul>
  );
};
