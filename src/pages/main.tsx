import { useState } from 'react';
import { Offer, OfferInfo } from '../types/offers';
import { CitiesTabs } from '../components/main-page';
import { useAppSelector } from '../app/hooks';
import { MainEmpty } from './main-empty';
import { Cities } from '../components/main-page/cities';
import { Nullable } from 'vitest';

export const Main = () => {
  const [selectedOffer, setSelectedOffer] = useState<OfferInfo | null>(null);
  const selectedCity = useAppSelector((state) => state.city);
  const filteredOffers: Nullable<Offer[]> = useAppSelector((state) => state.offers)?.filter((offer) => offer.city.name === selectedCity.name);

  return (
    <main className="page__main page__main--index">
      <CitiesTabs />
      {filteredOffers ?
        <Cities selectedCity={selectedCity} offers={filteredOffers} onMouseOff={setSelectedOffer} onOfferHover={setSelectedOffer} selectedOffer={selectedOffer} /> :
        <MainEmpty city={selectedCity} />}
    </main>
  );
};
