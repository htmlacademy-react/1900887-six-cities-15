import { createAsyncThunk } from '@reduxjs/toolkit';
import {TAsyncThunk, TAuthInfo} from '../types/state';
import { Offer } from '../types/offers';
import { addComment, addToFavoritesAction, dropCurrentUser, requireAuthorization, saveCurrentUser, setIsLoading } from './action';
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


export const fetchOfferAction = createAsyncThunk<Offer, string | undefined, TAsyncThunk>(
  `${SliceName.AppData}/fetchOffer`,
  async (offerId: string | undefined, {extra: api}) => {
    const {data} = await api.get<Offer>(`/offers/${offerId}`);
    return data;
  },
);

export const fetchOffersAction = createAsyncThunk<Offer[], undefined, TAsyncThunk>(
  `${SliceName.AppData}/fetchOffers`,
  async (_arg, {extra: api}) => {
    const {data} = await api.get<Offer[]>('/offers');
    return data;
  },
);

export const fetchNearPlaces = createAsyncThunk<Offer[], string | undefined, TAsyncThunk>(
  `${SliceName.AppData}/fetchNearPlaces`,
  async (offerId: string | undefined, {extra: api}) => {
    const {data} = await api.get<Offer[]>(`/offers/${offerId}/nearby`);
    return data;
  },
);

export const fetchReviewsAction = createAsyncThunk<ReviewsInfo, string | undefined, TAsyncThunk>(
  `${SliceName.AppData}/fetchReviews`,
  async (offerId: string | undefined, {extra: api}) => {
    const {data} = await api.get<ReviewsInfo>(`/comments/${offerId}`);
    return data;
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, TAsyncThunk>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<TAuthInfo>(APIRoutes.Login);
      saveToken(data.token);
      dispatch(saveCurrentUser(data));
      dispatch(requireAuthorization(AuthorizationStatus.AUTH));
    } catch (err) {
      dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH));
    }
  }
);

export const loginAction = createAsyncThunk<TAuthInfo, AuthData, TAsyncThunk>(
  `${SliceName.UserProcess}/login`,
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data} = await api.post<TAuthInfo>(APIRoutes.Login, {email, password});
    saveToken(data.token);
    dispatch(fetchOffersAction());
    redirect(AppRoutes.Root);
    return data;
  },
);

export const logoutAction = createAsyncThunk<void, undefined, TAsyncThunk>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoutes.Logout);
    dropToken();
    dropUser();
    dispatch(dropCurrentUser());
  },
);

export const fetchAddToFavorites = createAsyncThunk<void, FavoritesData, TAsyncThunk>(
  'app/addToFavorites',
  async ({id, status}, {dispatch, extra: api}) => {
    dispatch(setIsLoading(true));
    const {data} = await api.post<Offer>(`/favorite/${id}/${status}`);
    dispatch(addToFavoritesAction(data));
    dispatch(fetchOffersAction());
    dispatch(setIsLoading(false));
  }
);

export const uploadComment = createAsyncThunk<void, ReviewData, TAsyncThunk>(
  'app/uploadComment',
  async ({offerId, review: {comment, rating}}, {dispatch, extra: api}) => {
    const {data} = await api.post<Review>(`/comments/${offerId}`, {comment, rating});
    dispatch(addComment(data));
  }
);
