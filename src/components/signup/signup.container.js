import React, { useEffect } from "react";

import SignUpComponent from "./signup.component";
import { singupValidation } from "./validation";
import { useDispatch, useSelector } from "react-redux";
import { SIGNUP_FORM_FIELD_NAME } from "./constants";
import { convertAuthLoginFormData } from "./convert";
import { uploadAuthLoginForm } from "./authAction";
import { resetStore } from "./authAction";
import { useNavigate } from "react-router-dom";

export default function SignUpContainer() {
  useEffect(() => {
    dispatch(resetStore());
  }, []);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const state = useSelector(({ AUTH }) => AUTH);

  const fieldEmail = SIGNUP_FORM_FIELD_NAME.LOGIN;
  const fieldPassword = SIGNUP_FORM_FIELD_NAME.PASSWORD;

  const onSubmitForm = (values) => {
    const data = convertAuthLoginFormData(values);
    dispatch(uploadAuthLoginForm(data, navigate));
  };

  return (
    <SignUpComponent
      onSubmitForm={onSubmitForm}
      singupValidation={singupValidation}
      fieldEmail={fieldEmail}
      fieldPassword={fieldPassword}
      error={state.error}
    />
  );
}
