import { Middleware, PayloadAction } from '@reduxjs/toolkit';
import rootReducer from '../reducer';

type Reducer = ReturnType<typeof rootReducer>;

export const redirect: Middleware<unknown, Reducer> =
  () =>
    (next) =>
      (action: PayloadAction<string>) => next(action);
