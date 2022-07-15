import React from "react";
import Box from '@mui/material/Box';
import SubmitButton from "../../element/button";
import FormInput from "../../element/input";
import ErrorLable from "../../element/error";
import TextLink from "../../element/textLink";
import { useTranslation } from "react-i18next";
import {Formik} from "formik";
import '../../utils/i18next'
import HeaderText from "../../element/headerText";


export default function SignUpComponent (props) {

    const {
        fieldEmail,
        fieldPassword,
        onSubmitForm,
        singupValidation,
        error
    }=props
    const {t}=useTranslation()
    return(
        <Box>
            
            <HeaderText text={t("SIGN_UP.HEADER")}/>

            <Formik
                initialValues={{ [fieldEmail]: '', [fieldPassword]: '' }}
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
               
            }) =>( 
                <form onSubmit={handleSubmit}>
                    
                    <Box sx={{marginBottom:'10px'}}>
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

                    <Box sx={{marginBottom:'10px'}}>
                        <FormInput
                            title={t("SIGN_UP.FIELD.PASSWORD.TITLE")}
                            placeholder={t("SIGN_UP.FIELD.PASSWORD.PLACEHOLDER")}
                            type="password"
                            error={errors[fieldPassword] }
                            name={fieldPassword}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values[fieldPassword]}
                        />
                    </Box>

                    <Box sx={{margin:'15px 0'}}>
                        <SubmitButton type="submit" disabled={isSubmitting} text={t("SIGN_UP.SUBMIT")}/>
                    </Box>

                </form>)}
            </Formik>

            {error&&<ErrorLable text={t("SIGN_UP.ERROR")}/>}

            <Box sx={{marginTop:'25px'}}>
                <TextLink text={t("SIGN_UP.FORGET_PASSWORD")} linkText={t("SIGN_UP.RESTORE")}/>            
            </Box>

        </Box>

    )
}
