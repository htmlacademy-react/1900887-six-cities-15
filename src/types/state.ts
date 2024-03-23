import { AxiosInstance } from 'axios';
import { store } from '../store';
import { City, Offer } from './offers';
import { Nullable } from 'vitest';
import { AuthorizationStatus } from '../const';

export type AppDispatch = typeof store.dispatch;

export type State = ReturnType<typeof store.getState>;

export type InitialState = {
  city: City;
  offers: Nullable<Offer[]>;
  selectedOffer: Nullable<Offer>;
  authorizationStatus: AuthorizationStatus;
};

export type TAsyncThunk = {dispatch: AppDispatch; state: State; extra: AxiosInstance};
