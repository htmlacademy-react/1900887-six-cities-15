import { createAsyncThunk } from '@reduxjs/toolkit';
import {TAsyncThunk} from '../types/state';
import { Offer } from '../types/offers';
import { getOffer, loadOffers, requireAuthorization, setIsLoading } from './action';
import { APIRoutes, AuthorizationStatus } from '../const';
import { AuthData, UserData } from '../types/user-data';
import { dropToken, saveToken } from '../services/token';

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

export const checkAuthAction = createAsyncThunk<void, undefined, TAsyncThunk>('user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(APIRoutes.Login);
      dispatch(requireAuthorization(AuthorizationStatus.AUTH));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH));
    }
  }
);

export const loginAction = createAsyncThunk<void, AuthData, TAsyncThunk>('user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<UserData>(APIRoutes.Login, {email, password});
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.AUTH));
  }
);

export const logoutAction = createAsyncThunk<void, undefined, TAsyncThunk>('user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoutes.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH));
  },
);
