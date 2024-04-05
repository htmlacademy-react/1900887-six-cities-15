import { FC } from 'react';
import { OfferRatingProps } from '../../types/offers';

export const OfferRating: FC<OfferRatingProps> = ({ rating }) => (
  <div className="offer__rating rating">
    <div className="offer__stars rating__stars">
      <span style={{ width: `${20 * rating}%` }}></span>
      <span className="visually-hidden">Rating</span>
    </div>
    <span className="offer__rating-value rating__value">{rating}</span>
  </div>
);
