import { FavoriteOfferList } from '../../types/offers';
import { FC } from 'react';
import { FavoriteLocationItem } from '../favorite-location-item';

export const FavoriteLocationItemList: FC<FavoriteOfferList> = ({ city, offers }) => (
  <li className="favorites__locations-items">
    <div className="favorites__locations locations locations--current">
      <div className="locations__item">
        <a className="locations__item-link">
          <span>{city}</span>
        </a>
      </div>
    </div>
    <div className='favorite_places'>
      {offers.map((offer) => <FavoriteLocationItem key={offer.id} offer={offer} />)}
    </div>
  </li>
);
