import { createSlice } from '@reduxjs/toolkit';
import { AppData } from '../../types/state';
import { NameSpace } from '../../const';
import { fetchOffersAction } from '../../api/api-actions';

const initialState: AppData = {
  offers: null,
  comments: null,
  nearPlaces: null,
  isLoading: false
};

export const appData = createSlice({
  name: NameSpace.AppData,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchOffersAction.fulfilled, (state) => {
        state.isLoading = false;
      });
  },
});
