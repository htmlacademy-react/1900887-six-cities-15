import { createAction } from '@reduxjs/toolkit';
import { City, Offer } from '../types/offers';
import { AuthorizationStatus } from '../const';
import { Nullable } from 'vitest';
import { TAuthInfo } from '../types/state';
import { ReviewsInfo } from '../types/reviews';

const selectCity = createAction<{city: City}>('app/selectCity');
const loadOffers = createAction<Offer[]>('offers/loadOffers');
const getOffer = createAction<Nullable<Offer>>('offers/getOffer');
const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
const setIsLoading = createAction<boolean>('offers/isLoading');
const setError = createAction<string | null>('app/setError');
const selectOffer = createAction<Nullable<Offer>>('app/selectOffer');
const saveCurrentUser = createAction<Nullable<TAuthInfo>>('app/saveUser');
const getComments = createAction<Nullable<ReviewsInfo>>('app/getComments');
const getNearPlacesAction = createAction<Nullable<Offer[]>>('app/getNearPlaces');

export {selectCity, loadOffers, requireAuthorization, getOffer, setIsLoading, setError, selectOffer, saveCurrentUser, getComments, getNearPlacesAction};
