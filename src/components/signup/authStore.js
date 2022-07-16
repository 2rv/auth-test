import { AUTH_LOGIN_ACTION_TYPE } from "./constants";

const initialState = {
  user: null,
  logged: false,
  error: false,
};

const authStore = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_LOGIN_ACTION_TYPE.FORM_SUCCESS:
      return {
        ...state,
        user: action.payload,
        logged: true,
        error: false,
      };
    case AUTH_LOGIN_ACTION_TYPE.FORM_ERROR:
      return {
        ...state,
        error: true,
      };
    case AUTH_LOGIN_ACTION_TYPE.RESET_STORE:
      return {
        ...initialState,
      };

    default:
      return state;
  }
};

export default authStore;
