import { createSelector } from '@reduxjs/toolkit';
import { State } from '../../types/state';
import { appData } from './app-data';

export const getSelectedOffer = (state: State) => state[appData.name].selectedOffer;
export const getOffers = (state: State) => state[appData.name].offers;
export const getCity = (state: State) => state[appData.name].city;
export const getError = (state: State) => state[appData.name];
export const getLoadingState = (state: State) => state[appData.name].isLoading;
export const getComments = (state: State) => state[appData.name].comments;
export const getNearPlaces = (state: State) => state[appData.name].nearPlaces?.slice(0, 3);

export const getOffersByCity = createSelector(
  [getOffers, getCity],
  (offers, city) => offers?.filter((offer) => offer.city.name === city.name)
);

export const getFavoriteOffers = createSelector(
  [getOffers],
  (offers) => offers?.filter((offer) => offer.isFavorite)
);

export const getCurrentComments = createSelector(
  [getComments],
  (comments) => comments?.slice(-10).reverse()
);
