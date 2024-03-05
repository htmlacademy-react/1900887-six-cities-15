import { FC } from 'react';
import { FavoriteOffers } from '../../types/offers';
import { FavoriteLocationItem } from './favorite-location-items';

export const FavoritesList: FC<FavoriteOffers> = ({offers}) => {
  const favoriteOffers = offers.filter((offer) => offer.isFavorite);

  return (
    <ul className="favorites__list">
      {favoriteOffers.map((item) => <FavoriteLocationItem key={item.id} offer={item}/>)}
    </ul>
  );
};
