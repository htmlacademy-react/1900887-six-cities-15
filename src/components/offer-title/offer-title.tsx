import { FC } from 'react';
import { OfferTitleProps } from '../../types/offers';
import { Bookmark } from '../favorites-bookmark';

export const OfferTitle: FC<OfferTitleProps> = ({ id, title, isFavorite }) => (
  <div className="offer__name-wrapper">
    <h1 className="offer__name">{title}</h1>
    <Bookmark id={id} isFavorite={isFavorite} bookmarkClassName='offer' width={31} height={33} />
  </div >
);
