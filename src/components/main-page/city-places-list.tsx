import { FC } from 'react';
import { TCityPlacesList } from '../../types/offers';
import { OfferCard } from '../offer-card';

export const CityPlacesList: FC<TCityPlacesList> = ({ offers, onMouseEvent }) => (
  <div className="cities__places-list places__list tabs__content">
    {offers.map((offer) => <OfferCard offer={offer} key={offer.id} onMouseEvent={onMouseEvent} />)}
  </div>
);
