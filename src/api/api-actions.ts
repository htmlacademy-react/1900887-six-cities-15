import { createAsyncThunk } from '@reduxjs/toolkit';
import {TAsyncThunk, TAuthInfo} from '../types/state';
import { Offer } from '../types/offers';
import { APIRoutes, AuthorizationStatus, SliceName } from '../const';
import { AuthData } from '../types/user-data';
import { dropUser, dropToken, saveToken } from '../services';
import { ReviewsInfo, ReviewData, Review } from '../types/reviews';
import { redirect } from 'react-router-dom';
import { AppRoutes } from '../app/routes';

type FavoritesData = {
  id: string;
  status: number;
}

type Error = {
  errorMessage: string;
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

const fetchNearPlaces = createAsyncThunk<Offer[], string | undefined, TAsyncThunk>(
  `${SliceName.AppData}/fetchNearPlaces`,
  async (offerId: string | undefined, {extra: api}) => {
    const {data} = await api.get<Offer[]>(`/offers/${offerId}/nearby`);
    return data;
  },
);

const fetchReviewsAction = createAsyncThunk<ReviewsInfo, string | undefined, TAsyncThunk>(
  `${SliceName.AppData}/fetchReviews`,
  async (offerId: string | undefined, {extra: api}) => {
    const {data} = await api.get<ReviewsInfo>(`/comments/${offerId}`);
    return data;
  },
);

const checkAuthAction = createAsyncThunk<TAuthInfo, undefined, TAsyncThunk>(
  `${SliceName.UserProcess}/checkAuth`,
  async (_arg, {extra: api}) => {
    const {data} = await api.get<TAuthInfo>(APIRoutes.Login);
    saveToken(data.token);
    return data;
  }
);

const loginAction = createAsyncThunk<TAuthInfo, AuthData, TAsyncThunk>(
  `${SliceName.UserProcess}/login`,
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data} = await api.post<TAuthInfo>(APIRoutes.Login, {email, password});
    saveToken(data.token);
    dispatch(fetchOffersAction());
    redirect(AppRoutes.Root);
    return data;
  },
);

const logoutAction = createAsyncThunk<void, undefined, TAsyncThunk>(
  `${SliceName.UserProcess}/logout`,
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoutes.Logout);
    dropToken();
    dropUser();
    dispatch(fetchOffersAction());
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

const uploadComment = createAsyncThunk<Review, ReviewData, TAsyncThunk>(
  `${SliceName.AppData}/uploadComment`,
  async ({offerId, review: {comment, rating}}, {extra: api}) => {
    const {data} = await api.post<Review>(`/comments/${offerId}`, {comment, rating});
    fetchReviewsAction(offerId);
    return data;
  }
);

const setError = createAsyncThunk<string, Error>(
  `${SliceName.UserProcess}/setError`,
  ({errorMessage}) => errorMessage
);

const setAuthStatus = createAsyncThunk<AuthorizationStatus, {status: AuthorizationStatus}>(
  `${SliceName.UserProcess}/setAuthStatus`,
  ({status}) => status
);

export {
  fetchNearPlaces,
  fetchOfferAction,
  fetchOffersAction,
  fetchReviewsAction,
  fetchAddToFavorites,
  uploadComment,
  loginAction,
  logoutAction,
  checkAuthAction,
  setError,
  setAuthStatus
};
