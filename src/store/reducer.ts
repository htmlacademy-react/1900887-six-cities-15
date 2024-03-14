import { createReducer } from '@reduxjs/toolkit';
import { offers } from '../mocks/offers';
import { insertOffer, selectCity } from './action';
import { CITY } from '../const';

const initialState = {
  city: CITY,
  offers: offers
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(selectCity, (state, action) => {
      state.city = action.payload.city;
    })
    .addCase(insertOffer, (state,action) => {
      state.offers.push(action.payload.offer);
    });
});
