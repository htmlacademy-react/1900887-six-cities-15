import { combineReducers } from '@reduxjs/toolkit';
import appData from './app-data/app-data';
import userProcess from './user-process/user-process';
import { SliceName } from '../const';


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

const rootReducer = combineReducers({
  [SliceName.AppData]: appData,
  [SliceName.UserProcess]: userProcess
});

export default rootReducer;
