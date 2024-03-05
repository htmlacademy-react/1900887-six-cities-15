import { MutableRefObject } from 'react';
import { City, Offer, OfferInfo } from './offers';

export type TUseMap = {
  mapRef: MutableRefObject<HTMLElement | null>;
  city: City;
};

export type MapProps = {
  city: City;
  offers: OfferInfo[];
  selectedOffer: Offer | null;
};
