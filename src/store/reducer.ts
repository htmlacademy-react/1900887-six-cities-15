import { combineReducers } from '@reduxjs/toolkit';
import { appData } from './app-data/app-data';
import { userProcess } from './user-process/user-process';


// const initialState: InitialState = {
//   city: DEFAULT_CITY,
//   offers: null,
//   selectedOffer: null,
//   authorizationStatus: AuthorizationStatus.UNKNOWN,
//   isLoading: false,
//   error: null,
//   currentUser: null,
//   comments: null,
//   nearPlaces: null,
//   favorites: null
// };

export const rootReducer = combineReducers({
  [appData.name]: appData.reducer,
  [userProcess.name]: userProcess.reducer
});
