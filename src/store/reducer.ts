import { createReducer } from '@reduxjs/toolkit';
import { getOffer, loadOffers, requireAuthorization, saveCurrentUser, selectCity, setError, setIsLoading } from './action';
import { AuthorizationStatus, DEFAULT_CITY } from '../const';
import { InitialState } from '../types/state';


const initialState: InitialState = {
  city: DEFAULT_CITY,
  offers: null,
  selectedOffer: null,
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  isLoading: false,
  error: null,
  currentUser: null
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
    })
    .addCase(setIsLoading, (state, action) => {
      state.isLoading = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(saveCurrentUser, (state, action) => {
      state.currentUser = action.payload;
    });
});
