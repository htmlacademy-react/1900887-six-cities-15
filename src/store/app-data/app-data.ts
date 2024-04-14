import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AppData, TAsyncThunk } from '../../types/state';
import { DEFAULT_CITY, SliceName } from '../../const';
import { selectCity } from '../action';
import { Offer } from '../../types/offers';
import { Review, ReviewData, ReviewsInfo } from '../../types/reviews';

type FavoritesData = {
  id: string;
  status: number;
}

const fetchOfferAction = createAsyncThunk<Offer, string | undefined, TAsyncThunk>(
  `${SliceName.AppData}/fetchOffer`,
  async (offerId: string | undefined, {extra: api}) => {
    const {data} = await api.get<Offer>(`/offers/${offerId}`);
    return data;
  },
);

const fetchOffersAction = createAsyncThunk<Offer[], undefined, TAsyncThunk>(
  `${SliceName.AppData}/fetchOffers`,
  async (_arg, {extra: api}) => {
    const {data} = await api.get<Offer[]>('/offers');
    return data;
  },
);

const fetchAddToFavorites = createAsyncThunk<Offer, FavoritesData, TAsyncThunk>(
  `${SliceName.AppData}/addToFavorites`,
  async ({id, status}, {dispatch, extra: api}) => {
    const {data} = await api.post<Offer>(`/favorite/${id}/${status}`);
    dispatch(fetchOffersAction());
    return data;
  }
);

const fetchReviewsAction = createAsyncThunk<ReviewsInfo, string | undefined, TAsyncThunk>(
  `${SliceName.AppData}/fetchReviews`,
  async (offerId: string | undefined, {extra: api}) => {
    const {data} = await api.get<ReviewsInfo>(`/comments/${offerId}`);
    return data;
  },
);

const fetchNearPlaces = createAsyncThunk<Offer[], string | undefined, TAsyncThunk>(
  `${SliceName.AppData}/fetchNearPlaces`,
  async (offerId: string | undefined, {extra: api}) => {
    const {data} = await api.get<Offer[]>(`/offers/${offerId}/nearby`);
    return data;
  },
);

const uploadComment = createAsyncThunk<Review, ReviewData, TAsyncThunk>(
  `${SliceName.AppData}/uploadComment`,
  async ({offerId, review: {comment, rating}}, {extra: api}) => {
    const {data} = await api.post<Review>(`/comments/${offerId}`, {comment, rating});
    fetchReviewsAction(offerId);
    return data;
  }
);

const initialState: AppData = {
  city: DEFAULT_CITY,
  offers: null,
  selectedOffer: null,
  comments: null,
  nearPlaces: null,
  isLoading: false,
  favorites: []
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
        state.favorites = action.payload.filter((offer) => offer.isFavorite);
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
      .addCase(uploadComment.fulfilled, (state, action) => {
        state.isLoading = false;
        state.comments?.push(action.payload);
      })
      .addCase(uploadComment.rejected, (state) => {
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
      })
      .addCase(fetchAddToFavorites.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAddToFavorites.fulfilled, (state, action) => {
        if (state?.selectedOffer?.id === action?.payload?.id) {
          state.selectedOffer.isFavorite = action.payload.isFavorite;
        }
        state.isLoading = false;
      })
      .addCase(fetchAddToFavorites.rejected, (state) => {
        state.isLoading = false;
      });
  }
});


const {reducer} = appData;
export default reducer;
