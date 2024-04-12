import { createSlice } from '@reduxjs/toolkit';
import { AppData } from '../../types/state';
import { DEFAULT_CITY, SliceName } from '../../const';
import { fetchNearPlaces, fetchOfferAction, fetchOffersAction, fetchReviewsAction } from '../api-actions';
import { selectCity } from '../action';

const initialState: AppData = {
  city: DEFAULT_CITY,
  offers: null,
  selectedOffer: null,
  comments: null,
  nearPlaces: null,
  isLoading: false,
};

const appData = createSlice({
  name: SliceName.AppData,
  initialState: initialState,

  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(selectCity, (state, action) => {
        state.city = action.payload.city;
      })
      .addCase(fetchOffersAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.offers = action.payload;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(fetchOfferAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchOfferAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.selectedOffer = action.payload;
      })
      .addCase(fetchOfferAction.rejected, (state) => {
        state.isLoading = false;
        state.selectedOffer = null;
      })
      .addCase(fetchReviewsAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchReviewsAction.fulfilled, (state, action) => {
        state.isLoading = true;
        state.comments = action.payload;
      })
      .addCase(fetchReviewsAction.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(fetchNearPlaces.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchNearPlaces.fulfilled, (state, action) => {
        state.isLoading = false;
        state.nearPlaces = action.payload;
      })
      .addCase(fetchNearPlaces.rejected, (state) => {
        state.isLoading = false;
        state.nearPlaces = null;
      });
  }
});

const {reducer} = appData;

export default reducer;
