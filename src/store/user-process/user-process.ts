import { createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus, SliceName } from '../../const';
import { loginAction, logoutAction } from '../api-actions';
import { UserProcess } from '../../types/state';

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
      });
  }
});

export default userProcess.reducer;
