import { FC } from 'react';
import { FavoriteOffers } from '../../types/offers';
import { FavoriteLocationItems } from './favorite-location-items';

export const FavoritesList: FC<FavoriteOffers> = ({offers}) => {
  const favoriteOffers = offers.filter((offer) => offer.isFavorite);

  return (
    <ul className="favorites__list">
      {favoriteOffers.map((item) => <FavoriteLocationItems key={item.id} offer={item}/>)}
    </ul>
  );
};
