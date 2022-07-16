import { combineReducers } from "redux";

import authStore from "../components/signup/authStore";
import langStore from "./lang/langStore";

export const reducers = combineReducers({
  AUTH: authStore,
  LANG: langStore,
});
