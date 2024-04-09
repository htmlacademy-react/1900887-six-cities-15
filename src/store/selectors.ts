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

export const getCurrentUser = createSelector(
  (state: State) => state.currentUser,
  (user) => user
);

export const getCurrentComments = createSelector(
  (state: State) => state.comments,
  (comments) => comments
);

export const getNearPlaces = createSelector(
  (state: State) => state.nearPlaces,
  (places) => places?.slice(0, 3)
);
