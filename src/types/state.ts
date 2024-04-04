import { AxiosInstance } from 'axios';
import { store } from '../store';
import { City, Offer } from './offers';
import { Nullable } from 'vitest';
import { AuthorizationStatus } from '../const';

export type AppDispatch = typeof store.dispatch;

export type State = ReturnType<typeof store.getState>;

export type TAuthInfo = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
  email: string;
  token: string;
}

export type InitialState = {
  city: City;
  offers: Nullable<Offer[]>;
  selectedOffer: Nullable<Offer>;
  authorizationStatus: AuthorizationStatus;
  isLoading: boolean;
  error: null | string;
  currentUser: Nullable<TAuthInfo>;
};

export type TAsyncThunk = {dispatch: AppDispatch; state: State; extra: AxiosInstance};

export type TSign = {
  authorizationStatus: string;
};
