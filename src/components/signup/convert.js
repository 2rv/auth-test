import { SIGNUP_FORM_FIELD_NAME } from "./constants";

export const convertAuthLoginFormData = (data) => ({
  [SIGNUP_FORM_FIELD_NAME.PASSWORD]: data[SIGNUP_FORM_FIELD_NAME.PASSWORD],
  [SIGNUP_FORM_FIELD_NAME.LOGIN]: data[SIGNUP_FORM_FIELD_NAME.LOGIN],
});
