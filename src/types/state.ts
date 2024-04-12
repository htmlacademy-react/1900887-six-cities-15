import { AxiosInstance } from 'axios';
import { store } from '../store';
import { City, Offer } from './offers';
import { Nullable } from 'vitest';
import { AuthorizationStatus } from '../const';
import { ReviewsInfo } from './reviews';

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
  comments: Nullable<ReviewsInfo>;
  nearPlaces: Nullable<Offer[]>;
  favorites: Nullable<Offer[]>;
};

export type AppData = {
  city: City;
  offers: Nullable<Offer[]>;
  selectedOffer: Nullable<Offer>;
  comments: Nullable<ReviewsInfo>;
  nearPlaces: Nullable<Offer[]>;
  isLoading: boolean;
}

export type UserProcess = {
  user: Nullable<TAuthInfo>;
  authorizationStatus: AuthorizationStatus;
  error: null | string;
}

export type TAsyncThunk = {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
};

export type TSign = {
  authorizationStatus: string;
};
