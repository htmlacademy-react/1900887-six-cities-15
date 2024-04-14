import { createSelector } from '@reduxjs/toolkit';
import { State } from '../../types/state';
import { AuthorizationStatus, SliceName } from '../../const';

const selectUser = (state: State) => state[SliceName.UserProcess].user;

export const getError = (state: State) => state[SliceName.UserProcess].error;
export const getCurrentUser = createSelector([selectUser], (user) => user);
export const getAuthorizationStatus = (state: State) => state[SliceName.UserProcess].authorizationStatus;
export const getIsAuth = (state: State) => state[SliceName.UserProcess].authorizationStatus === AuthorizationStatus.AUTH;

export const getErrorMessage = createSelector(
  [getError],
  (error) => error
);
