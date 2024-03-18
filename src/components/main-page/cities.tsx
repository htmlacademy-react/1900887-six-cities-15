import { FC } from 'react';
import { CityPlaces } from './city-places';
import { TCities } from '../../types/offers';
import { Map } from '../map';

export const Cities: FC<TCities> = ({ selectedCity, offers, onMouseOff, onOfferHover, selectedOffer }) => (
  <div className='cities'>
    <div className="cities__places-container container">
      <CityPlaces city={selectedCity} offers={offers} onOfferHover={onMouseOff} onMouseOff={onOfferHover} />
      <Map city={selectedCity} offers={offers} selectedOffer={selectedOffer} />
    </div>
  </div>
);
