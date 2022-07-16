import React from "react";
import Box from "@mui/material/Box";
import TextLink from "../../element/textLink";
import "../../utils/i18next";
import { useTranslation } from "react-i18next";
import { Formik } from "formik";
import HeaderText from "../../element/headerText";
import ErrorLable from "../../element/error";
import AuthFormView from "./authFormView";

export default function SignUpComponent(props) {
  const { fieldEmail, fieldPassword, onSubmitForm, singupValidation, error } =
    props;
  const { t } = useTranslation();
  return (
    <Box>
      <HeaderText text={t("SIGN_UP.HEADER")} />

      <Formik
        initialValues={{ [fieldEmail]: "", [fieldPassword]: "" }}
        validate={singupValidation}
        onSubmit={onSubmitForm}
      >
        {({
          values,
          errors,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <AuthFormView
            handleSubmit={handleSubmit}
            errors={errors}
            fieldEmail={fieldEmail}
            handleChange={handleChange}
            handleBlur={handleBlur}
            fieldPassword={fieldPassword}
            isSubmitting={isSubmitting}
            values={values}
            t={t}
          />
        )}
      </Formik>

      {error && <ErrorLable text={t("SIGN_UP.ERROR")} />}

      <Box sx={{ marginTop: "25px" }}>
        <TextLink
          text={t("SIGN_UP.FORGET_PASSWORD")}
          linkText={t("SIGN_UP.RESTORE")}
        />
      </Box>
    </Box>
  );
}
