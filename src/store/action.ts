import { createAction } from '@reduxjs/toolkit';
import { City, Offer } from '../types/offers';
import { AuthorizationStatus } from '../const';
import { Nullable } from 'vitest';
import { TAuthInfo } from '../types/state';
import { Review, ReviewsInfo } from '../types/reviews';

export const selectCity = createAction<{city: City}>('app/selectCity');
export const loadOffers = createAction<Offer[]>('offers/loadOffers');
export const getOffer = createAction<Nullable<Offer>>('offers/getOffer');
export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const setIsLoading = createAction<boolean>('offers/isLoading');
export const setError = createAction<string | null>('app/setError');
export const selectOffer = createAction<Nullable<Offer>>('app/selectOffer');
export const saveCurrentUser = createAction<Nullable<TAuthInfo>>('app/saveUser');
export const dropCurrentUser = createAction('app/dropUser');
export const getComments = createAction<Nullable<ReviewsInfo>>('app/getComments');
export const getNearPlacesAction = createAction<Nullable<Offer[]>>('app/getNearPlaces');
export const addToFavoritesAction = createAction<Offer>('app/addToFavorites');
export const addComment = createAction<Review>('app/addComment');

