import { FC } from 'react';
import { OfferPriceProps } from '../../types/offers';

export const OfferPrice: FC<OfferPriceProps> = ({ price }) => (
  <div className="offer__price">
    <b className="offer__price-value">&euro;{price}</b>
    <span className="offer__price-text">&nbsp;night</span>
  </div>
);
