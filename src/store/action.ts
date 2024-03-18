import { createAction } from '@reduxjs/toolkit';
import { City } from '../types/offers';
import { Offer } from '../types/offers';

const selectCity = createAction<{city: City}>('app/selectCity');
const insertOffer = createAction<{offer: Offer}>('offer/insertOffer');

export {selectCity, insertOffer};
