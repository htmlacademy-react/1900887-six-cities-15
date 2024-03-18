import { useState } from 'react';
import { Offer, OfferInfo } from '../types/offers';
import { CitiesTabs } from '../components/main-page';
// import { Map } from '../components/map';
import { useAppSelector } from '../app/hooks';
import { MainEmpty } from './main-empty';
import { Cities } from '../components/main-page/cities';

export const Main = () => {
  const [selectedOffer, setSelectedOffer] = useState<OfferInfo | null>(null);
  const selectedCity = useAppSelector((state) => state.city);
  const offers: Offer[] = useAppSelector((state) => state.offers).filter((offer) => offer.city.name === selectedCity.name);

  return (
    <main className="page__main page__main--index">
      <CitiesTabs />
      {offers.length ?
        <Cities selectedCity={selectedCity} offers={offers} onMouseOff={setSelectedOffer} onOfferHover={setSelectedOffer} selectedOffer={selectedOffer} /> :
        <MainEmpty city={selectedCity} />}
    </main>
  );
};
