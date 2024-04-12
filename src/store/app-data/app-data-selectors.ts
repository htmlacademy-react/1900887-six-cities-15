import { createSelector } from '@reduxjs/toolkit';
import { State } from '../../types/state';
import { SliceName } from '../../const';

export const getSelectedOffer = (state: State) => state[SliceName.AppData].selectedOffer;
export const getOffers = (state: State) => state[SliceName.AppData].offers;
export const getCity = (state: State) => state[SliceName.AppData].city;
export const getError = (state: State) => state[SliceName.AppData];
export const getLoadingState = (state: State) => state[SliceName.AppData].isLoading;
export const getComments = (state: State) => state[SliceName.AppData].comments;
export const getNearPlaces = (state: State) => state[SliceName.AppData].nearPlaces?.slice(0, 3);

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
