import { FC } from 'react';
import { OfferTitleProps } from '../../types/offers';

export const OfferTitle: FC<OfferTitleProps> = ({title}) => (
  <div className="offer__name-wrapper">
    <h1 className="offer__name">
      {title}
    </h1>
    <button className="offer__bookmark-button button" type="button">
      <svg className="offer__bookmark-icon" width="31" height="33">
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  </div>
);
