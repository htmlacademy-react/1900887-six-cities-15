// import { createSelector } from '@reduxjs/toolkit';
// import { State } from '../types/state';
// import { AuthorizationStatus, NameSpace } from '../const';

// export const getOffersByCity = createSelector(
//   (state: State) => state.offers,
//   (state: State) => state.city.name,
//   (offers, city) => offers?.filter((offer) => offer.city.name === city)
// );

// export const getCity = createSelector(
//   (state: Pick<State, NameSpace.CITY>) => state.city,
//   (selectedCity) => selectedCity
// );

// export const getSelectedOffer = createSelector(
//   (state: State) => state.selectedOffer,
//   (selectedOffer) => selectedOffer
// );

// export const getLoadingState = createSelector(
//   (state: Pick<State, NameSpace.LOADING>) => state.isLoading,
//   (isLoading) => isLoading
// );

// export const getAuthorizationStatus = createSelector(
//   (state: Pick<State, NameSpace.AUTH>) => state.authorizationStatus,
//   (authorizationStatus) => authorizationStatus
// );

// export const getErrorMessage = createSelector(
//   (state: Pick<State, NameSpace.ERROR>) => state.error,
//   (error) => error
// );

// export const getCurrentUser = createSelector(
//   (state: Pick<State, NameSpace.USER>) => state.currentUser,
//   (user) => user
// );

// export const getCurrentComments = createSelector(
//   (state: Pick<State, NameSpace.COMMENTS>) => state.comments,
//   (comments) => comments?.slice(-10).reverse()
// );

// export const getNearPlaces = createSelector(
//   (state: State) => state.nearPlaces,
//   (places) => places?.slice(0, 3)
// );

// export const getFavoriteOffers = createSelector(
//   (state: State) => state.offers,
//   (offers) => offers?.filter((offer) => offer.isFavorite),
// );

// export const getIsAuth = createSelector(
//   (state: State) => state.authorizationStatus,
//   (status) => status === AuthorizationStatus.AUTH
// );
