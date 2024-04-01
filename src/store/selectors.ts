import { createSelector } from '@reduxjs/toolkit';
import { State } from '../types/state';

export const getOffersByCity = createSelector(
  (state: State) => state.offers,
  (state: State) => state.city.name,
  (offers, city) => offers?.filter((offer) => offer.city.name === city)
);

export const getCity = createSelector(
  (state: State) => state.city,
  (selectedCity) => selectedCity
);

export const getSelectedOffer = createSelector(
  (state: State) => state.selectedOffer,
  (selectedOffer) => selectedOffer
);

export const getLoadingState = createSelector(
  (state: State) => state.isLoading,
  (isLoading) => isLoading
);

export const getAuthorizationStatus = createSelector(
  (state: State) => state.authorizationStatus,
  (authorizationStatus) => authorizationStatus
);

export const getErrorMessage = createSelector(
  (state: State) => state.error,
  (error) => error
);
