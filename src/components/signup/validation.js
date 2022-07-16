import { SIGNUP_FORM_FIELD_NAME } from "./constants";

export function singupValidation(values) {
  const errors = {};
  if (!values[SIGNUP_FORM_FIELD_NAME.LOGIN]) {
    errors[SIGNUP_FORM_FIELD_NAME.LOGIN] =
      "SIGN_UP.FIELD.LOGIN.ERRORS.REQUIRED";
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
      values[SIGNUP_FORM_FIELD_NAME.LOGIN]
    )
  ) {
    errors[SIGNUP_FORM_FIELD_NAME.LOGIN] = "SIGN_UP.FIELD.LOGIN.ERRORS.WRONG";
  } else if (!values[SIGNUP_FORM_FIELD_NAME.PASSWORD]) {
    errors[SIGNUP_FORM_FIELD_NAME.PASSWORD] =
      "SIGN_UP.FIELD.PASSWORD.ERRORS.REQUIRED";
  }
  return errors;
}
