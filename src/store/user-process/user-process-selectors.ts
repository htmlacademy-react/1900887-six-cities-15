import { createSelector } from '@reduxjs/toolkit';
import { State } from '../../types/state';
import { userProcess } from './user-process';

export const getError = (state: State) => state[userProcess.name].error;
export const getCurrentUser = (state: State) => state[userProcess.name].user;
export const getAuthorizationStatus = (state: State) => state[userProcess.name].authorizationStatus;

export const getErrorMessage = createSelector(
  [getError],
  (error) => error
);
