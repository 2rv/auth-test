import React from "react";
import {Formik} from "formik";
import { singupValidation } from "./validation";
import { SIGNUP_FORM_FIELD_NAME } from "./signup.type";
import  {FieldLayout}  from "../../element/layout/layout.field";
import SignUpComponent from "./signup.component";
import { onSubmitForm } from "./onSubmit.Form";

export default function SignUpContainer (){
    return(    
        <FieldLayout>
            <Formik
            initialValues={{ [SIGNUP_FORM_FIELD_NAME.EMAIL]: '', [SIGNUP_FORM_FIELD_NAME.PASSWORD]: '' }}
            validate={singupValidation}
            onSubmit={onSubmitForm}
            >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                status
               
            }) => (
                <SignUpComponent 
                fieldEmail={SIGNUP_FORM_FIELD_NAME.EMAIL} 
                fieldPassword={SIGNUP_FORM_FIELD_NAME.PASSWORD}
                values={values}
                status={status}
                errors={errors}
                touched={touched}
                handleChange={handleChange}
                handleBlur={handleBlur}
                handleSubmit={handleSubmit}
                isSubmitting={isSubmitting}
                />
            )}
            </Formik>
        </FieldLayout>
)}


