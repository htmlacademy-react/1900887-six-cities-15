import { createAsyncThunk } from '@reduxjs/toolkit';
import {TAsyncThunk, TAuthInfo} from '../types/state';
import { Offer } from '../types/offers';
import { getOffer, loadOffers, requireAuthorization, saveCurrentUser, setError, setIsLoading } from '../store/action';
import { APIRoutes, AuthorizationStatus, ERROR_TIMEOUT } from '../const';
import { AuthData, UserData } from '../types/user-data';
import { dropToken, saveToken } from '../services/token';
import { store } from '../store';
import { dropUser, saveUser } from '../services/user';

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
      const {data} = await api.get<TAuthInfo>(APIRoutes.Login);
      dispatch(saveCurrentUser(data));
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
    saveUser(email);
    dispatch(requireAuthorization(AuthorizationStatus.AUTH));
  }
);

export const logoutAction = createAsyncThunk<void, undefined, TAsyncThunk>('user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoutes.Logout);
    dropToken();
    dropUser();
    dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH));
  },
);

export const clearErrorAction = createAsyncThunk('app/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      ERROR_TIMEOUT
    );
  }
);
