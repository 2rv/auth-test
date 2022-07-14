import { combineReducers } from 'redux';

import authStore from './auth/authStore';
import langStore from './lang/langStore';


export const reducers = combineReducers({
  AUTH: authStore,
  LANG: langStore,
});


