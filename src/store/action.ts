import { createAction } from '@reduxjs/toolkit';
import { City, Offer } from '../types/offers';
import { AuthorizationStatus } from '../const';
import { Nullable } from 'vitest';
import { TAuthInfo } from '../types/state';

const selectCity = createAction<{city: City}>('app/selectCity');
const insertOffer = createAction<{offer: Offer}>('offers/insertOffer');
const loadOffers = createAction<Offer[]>('offers/loadOffers');
const getOffer = createAction<Nullable<Offer>>('offers/getOffer');
const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
const setIsLoading = createAction<boolean>('offers/isLoading');
const setError = createAction<string | null>('app/setError');
const selectOffer = createAction<Nullable<Offer>>('app/selectOffer');
const saveCurrentUser = createAction<Nullable<TAuthInfo>>('app/saveUser');

export {selectCity, insertOffer, loadOffers, requireAuthorization, getOffer, setIsLoading, setError, selectOffer, saveCurrentUser};
