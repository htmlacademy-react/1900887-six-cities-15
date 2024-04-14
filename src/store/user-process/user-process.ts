import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { APIRoutes, AuthorizationStatus, SliceName } from '../../const';
import { fetchOffersAction } from '../../api/api-actions';
import { TAsyncThunk, TAuthInfo, UserProcess } from '../../types/state';
import { AuthData } from '../../types/user-data';
import { dropToken, dropUser, saveToken } from '../../services';
import { AppRoutes } from '../../app/routes';
import { redirect } from 'react-router-dom';

type Error = {
  errorMessage: string;
}

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
  async (_arg, {extra: api}) => {
    await api.delete(APIRoutes.Logout);
    dropToken();
    dropUser();
    fetchOffersAction();
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

const setError = createAsyncThunk<string, Error>(
  `${SliceName.UserProcess}/setError`,
  ({errorMessage}) => errorMessage
);

const setAuthStatus = createAsyncThunk<AuthorizationStatus, {status: AuthorizationStatus}>(
  `${SliceName.UserProcess}/setAuthStatus`,
  ({status}) => status
);

const initialState: UserProcess = {
  user: null,
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  error: null
};

const userProcess = createSlice({
  name: SliceName.UserProcess,
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(logoutAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.NO_AUTH;
        state.user = null;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.user = action.payload;
        state.authorizationStatus = AuthorizationStatus.AUTH;
      })
      .addCase(loginAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NO_AUTH;
        state.user = null;
      })
      .addCase(checkAuthAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.AUTH;
        state.user = action.payload;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NO_AUTH;
        state.user = null;
      })
      .addCase(setError.fulfilled, (state, action) => {
        state.error = action.payload;
      })
      .addCase(setAuthStatus.fulfilled, (state, action) => {
        state.authorizationStatus = action.payload;
      });
  }
});

export default userProcess.reducer;
