import { createAction } from '@reduxjs/toolkit';
import { City, Offer } from '../types/offers';
import { AuthorizationStatus } from '../const';
import { Nullable } from 'vitest';

const selectCity = createAction<{city: City}>('app/selectCity');
const insertOffer = createAction<{offer: Offer}>('offers/insertOffer');
const loadOffers = createAction<Offer[]>('offers/loadOffers');
const getOffer = createAction<Nullable<Offer>>('offers/getOffer');
const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
const setIsLoading = createAction<boolean>('offers/isLoading');

export {selectCity, insertOffer, loadOffers, requireAuthorization, getOffer, setIsLoading};
