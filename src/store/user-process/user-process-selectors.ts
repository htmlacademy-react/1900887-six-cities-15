import { createSelector } from '@reduxjs/toolkit';
import { State } from '../../types/state';
import { SliceName } from '../../const';

export const getError = (state: State) => state[SliceName.UserProcess].error;
export const getCurrentUser = (state: State) => state[SliceName.UserProcess].user;
export const getAuthorizationStatus = (state: State) => state[SliceName.UserProcess].authorizationStatus;

export const getErrorMessage = createSelector(
  [getError],
  (error) => error
);
