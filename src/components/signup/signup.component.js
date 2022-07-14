import React from "react";
import SubmitButton from "../../element/button";
import FormInput from "../../element/input";
import ErrorLable from "../../element/error";
import RestorePassword from "../../element/restorePassword";
import { useTranslation } from "react-i18next";
import '../../utils/i18next'


export default function SignUpComponent (props) {
    const{
        fieldEmail,
        fieldPassword,
        values,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        status
    }=props

    const {t}=useTranslation()
    return(
        <div>
            <h2>{t("SIGN_UP.HEADER")}</h2>
            <form onSubmit={handleSubmit}>
                <FormInput
                    error={errors[fieldEmail]}
                    name={fieldEmail}
                    placeholder={t("SIGN_UP.FIELD.LOGIN.PLACEHOLDER")}
                    title={t("SIGN_UP.FIELD.LOGIN.TITLE")}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values[fieldEmail]}
                />
                
                <FormInput
                    title={t("SIGN_UP.FIELD.PASSWORD.TITLE")}
                    placeholder={t("SIGN_UP.FIELD.PASSWORD.PLACEHOLDER")}
                    type="password"
                    error={status ?? errors[fieldPassword] }
                    name={fieldPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values[fieldPassword]}
                />
               
                <SubmitButton type="submit" disabled={isSubmitting} text={t("SIGN_UP.SUBMIT")}/>

            </form>
            {status&&<ErrorLable text={t("SIGN_UP.ERROR")}/>} 
            <RestorePassword text={t("SIGN_UP.FORGET_PASSWORD")} linkText={t("SIGN_UP.RESTORE")}/>
        </div>

    )
}
