import { createReducer } from '@reduxjs/toolkit';
import { getOffer, loadOffers, requireAuthorization, selectCity } from './action';
import { AuthorizationStatus, DEFAULT_CITY } from '../const';
import { InitialState } from '../types/state';


const initialState: InitialState = {
  city: DEFAULT_CITY,
  offers: null,
  selectedOffer: null,
  authorizationStatus: AuthorizationStatus.UNKNOWN
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(selectCity, (state, action) => {
      state.city = action.payload.city;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(getOffer, (state, action) => {
      state.selectedOffer = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});
