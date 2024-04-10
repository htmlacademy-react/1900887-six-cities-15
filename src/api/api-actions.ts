import { createAsyncThunk } from '@reduxjs/toolkit';
import {TAsyncThunk, TAuthInfo} from '../types/state';
import { Offer } from '../types/offers';
import { addComment, addToFavoritesAction, dropCurrentUser, getComments, getNearPlacesAction, getOffer, loadOffers, requireAuthorization, saveCurrentUser, setIsLoading } from '../store/action';
import { APIRoutes, AuthorizationStatus } from '../const';
import { AuthData, UserData } from '../types/user-data';
import { dropUser, saveUser, dropToken, saveToken } from '../services';
import { ReviewsInfo, ReviewData, Review } from '../types/reviews';
import { redirect } from 'react-router-dom';
import { AppRoutes } from '../app/routes';

type FavoritesData = {
  id: string;
  status: number;
}

export const fetchOffersAction = createAsyncThunk<void, undefined, TAsyncThunk>('data/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Offer[]>('/offers');
    dispatch(loadOffers(data));
  }
);

export const fetchOfferAction = createAsyncThunk<void, string | undefined, TAsyncThunk>('data/fetchOffer',
  async (offerId: string | undefined, {dispatch, extra: api}) => {
    dispatch(setIsLoading(true));
    const {data} = await api.get<Offer>(`/offers/${offerId}`);
    dispatch(getOffer(data));
    dispatch(setIsLoading(false));
  }
);

export const fetchNearPlaces = createAsyncThunk<void, string | undefined, TAsyncThunk>('data/fetchNearPlaces',
  async (offerId: string | undefined, {dispatch, extra: api}) => {
    const {data} = await api.get<Offer[]>(`/offers/${offerId}/nearby`);
    dispatch(getNearPlacesAction(data));
  }
);

export const fetchReviewsAction = createAsyncThunk<void, string | undefined, TAsyncThunk>('data/fetchReviews',
  async (offerId: string | undefined, {dispatch, extra: api}) => {
    const {data} = await api.get<ReviewsInfo>(`/comments/${offerId}`);
    dispatch(getComments(data));
  }
);

export const checkAuthAction = createAsyncThunk<void, undefined, TAsyncThunk>('user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<TAuthInfo>(APIRoutes.Login);
      dispatch(saveCurrentUser(data));
      saveUser(data.email);
      dispatch(requireAuthorization(AuthorizationStatus.AUTH));
    } catch (err) {
      dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH));
    }
  }
);

export const loginAction = createAsyncThunk<void, AuthData, TAsyncThunk>('user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<UserData>(APIRoutes.Login, {email, password});
    saveToken(token);
    dispatch(checkAuthAction());
    redirect(AppRoutes.Root);
  }
);

export const logoutAction = createAsyncThunk<void, undefined, TAsyncThunk>('user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoutes.Logout);
    dropToken();
    dropUser();
    dispatch(dropCurrentUser());
    dispatch(checkAuthAction());
  },
);

export const fetchAddToFavorites = createAsyncThunk<void, FavoritesData, TAsyncThunk>('app/addToFavorites',
  async ({id, status}, {dispatch, extra: api}) => {
    dispatch(setIsLoading(true));
    const {data} = await api.post<Offer>(`/favorite/${id}/${status}`);
    dispatch(addToFavoritesAction(data));
    dispatch(fetchOffersAction());
    dispatch(setIsLoading(false));
  }
);

export const uploadComment = createAsyncThunk<void, ReviewData, TAsyncThunk>('app/uploadComment',
  async ({offerId, review: {comment, rating}}, {dispatch, extra: api}) => {
    const {data} = await api.post<Review>(`/comments/${offerId}`, {comment, rating});
    dispatch(addComment(data));
  }
);
