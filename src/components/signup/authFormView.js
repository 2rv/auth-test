import React from "react";
import FormInput from "../../element/input";
import SubmitButton from "../../element/button";
import Box from "@mui/material/Box";

function AuthFormView(props) {
  const {
    handleSubmit,
    errors,
    fieldEmail,
    handleChange,
    handleBlur,
    fieldPassword,
    isSubmitting,
    values,
    t,
  } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Box sx={{ mb: "10px" }}>
        <FormInput
          error={errors[fieldEmail]}
          name={fieldEmail}
          placeholder={t("SIGN_UP.FIELD.LOGIN.PLACEHOLDER")}
          title={t("SIGN_UP.FIELD.LOGIN.TITLE")}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values[fieldEmail]}
        />
      </Box>

      <Box sx={{ mb: "10px" }}>
        <FormInput
          title={t("SIGN_UP.FIELD.PASSWORD.TITLE")}
          placeholder={t("SIGN_UP.FIELD.PASSWORD.PLACEHOLDER")}
          type="password"
          error={errors[fieldPassword]}
          name={fieldPassword}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values[fieldPassword]}
        />
      </Box>

      <Box sx={{ margin: "15px 0" }}>
        <SubmitButton
          type="submit"
          disabled={isSubmitting}
          text={t("SIGN_UP.SUBMIT")}
        />
      </Box>
    </form>
  );
}

export default AuthFormView;
