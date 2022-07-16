import { AUTH_LOGIN_ACTION_TYPE, AUTH_LOGIN_API } from "./constants";
import axios from "axios";

export const uploadAuthLoginForm = (data, navigate) => {
  return async (dispatch) => {
    try {
      await axios({
        method: "post",
        url: AUTH_LOGIN_API,
        data: data,
      }).then((res) => {
        if (res.status === 201) {
          dispatch({
            type: AUTH_LOGIN_ACTION_TYPE.FORM_SUCCESS,
            payload: data.login,
          });
          console.log(res.status);
          navigate("/auth_successfully");
        }
      });
    } catch (error) {
      dispatch({
        type: AUTH_LOGIN_ACTION_TYPE.FORM_ERROR,
      });
    }
  };
};

export const resetStore = () => {
  return {
    type: AUTH_LOGIN_ACTION_TYPE.RESET_STORE,
  };
};
