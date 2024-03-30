import { FC, useState } from 'react';
import { CityPlaces } from './city-places';
import { OfferInfo, TCities } from '../../types/offers';
import { Map } from '../map';

export const Cities: FC<TCities> = ({ selectedCity, offers }) => {
  const [selectedOffer, setSelectedOffer] = useState<OfferInfo | null>(null);

  return (
    <div className='cities'>
      <div className="cities__places-container container">
        <CityPlaces city={selectedCity} offers={offers} onMouseEvent={setSelectedOffer} />
        <Map city={selectedCity} offers={offers} selectedOffer={selectedOffer} />
      </div>
    </div>
  );
};
