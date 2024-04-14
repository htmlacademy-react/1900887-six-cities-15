import { combineReducers } from '@reduxjs/toolkit';
import appData from './app-data/app-data';
import userProcess from './user-process/user-process';
import { SliceName } from '../const';


const rootReducer = combineReducers({
  [SliceName.AppData]: appData,
  [SliceName.UserProcess]: userProcess
});

export default rootReducer;
