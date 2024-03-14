import { FC, useState } from 'react';
import { OfferInfo, Offers } from '../types/offers';
import { CitiesTabs, CityPlaces } from '../components/main-page';
import { Map } from '../components/map';
import { useAppSelector } from '../app/hooks';

export const Main: FC<Offers> = ({ offers }) => {
  const [selectedOffer, setSelectedOffer] = useState<OfferInfo | null>(null);
  const selectedCity = useAppSelector((state) => state.city);

  return (
    <main className="page__main page__main--index">
      <CitiesTabs />
      <div className='cities'>
        <div className="cities__places-container container">
          <CityPlaces offers={offers} onOfferHover={setSelectedOffer} onMouseOff={setSelectedOffer} />
          <Map city={selectedCity} offers={offers} selectedOffer={selectedOffer} />
        </div>
      </div>
    </main>
  );
};
