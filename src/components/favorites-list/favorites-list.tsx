import { FC } from 'react';
import { FavoriteOffers } from '../../types/offers';
import { FavoriteLocationItem } from '../favorite-location-item';

export const FavoritesList: FC<FavoriteOffers> = ({ offers }) => (
  <ul className="favorites__list">
    {offers?.map((item) => <FavoriteLocationItem key={item.id} offer={item} />)}
  </ul>
);
