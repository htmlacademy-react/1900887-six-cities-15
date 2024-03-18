import { FC, useState } from 'react';
import { OfferInfo, Offers } from '../types/offers';
import { CitiesTabs, CityPlaces } from '../components/main-page';
import { Map } from '../components/map';
import { CITY } from '../const';

export const Main: FC<Offers> = ({offers}) => {
  const [selectedOffer, setSelectedOffer] = useState<OfferInfo | null>(null);

  return (
    <main className="page__main page__main--index">
      <CitiesTabs/>
      <div className='cities'>
        <div className="cities__places-container container">
          <CityPlaces offers={offers} onOfferHover={setSelectedOffer} onMouseOff={setSelectedOffer}/>
          <Map city={CITY} offers={offers} selectedOffer={selectedOffer}/>
        </div>
      </div>
    </main>
  );
};