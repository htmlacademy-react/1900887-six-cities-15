import { FC } from 'react';
import { FavoriteOffers } from '../../types/offers';
import { FavoriteLocationItemList } from '../favorite-location-item-list';
import { groupBy } from './source';
import { FavoritesEmpty } from '../favorites-empty';

export const FavoritesList: FC<FavoriteOffers> = ({ offers }) => {
  if (!offers?.length) {
    return <FavoritesEmpty />;
  }
  const groupedOffers = Object.entries(groupBy(offers, (offer) => offer.city.name));

  return (
    <ul className="favorites__list">
      {groupedOffers.map((item) => <FavoriteLocationItemList key={item[0]} city={item[0]} offers={item[1]} />)}
    </ul>
  );
};
