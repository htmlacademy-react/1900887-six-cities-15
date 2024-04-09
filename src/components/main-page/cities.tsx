import { FC, useCallback, useState } from 'react';
import { CityPlaces } from './city-places';
import { Offer, OfferInfo, TCities } from '../../types/offers';
import { Map } from '../map';
import { SORTING } from '../../const';
import { sortOffers } from '../sorting/source';

export const Cities: FC<TCities> = ({ selectedCity, offers }) => {
  const [selectedOffer, setSelectedOffer] = useState<OfferInfo | null>(null);
  const [sortType, setSortType] = useState<string>(SORTING.POPULAR);

  const sortedOffers: Offer[] = sortOffers({ sortType, offers });
  const handleMouseEvent = useCallback((offer: Offer | null) => setSelectedOffer(offer), []);


  return (
    <div className='cities'>
      <div className="cities__places-container container">
        <CityPlaces city={selectedCity} offers={sortedOffers} onMouseEvent={handleMouseEvent} onClickEvent={setSortType} />
        <Map city={selectedCity} offers={offers} selectedOffer={selectedOffer} className={'cities__map'} />
      </div>
    </div>
  );
};
