import { SIGNUP_FORM_FIELD_NAME } from "./signup.type"

export function singupValidation (values,t) {  
    const errors = {}
    if (!values[SIGNUP_FORM_FIELD_NAME.EMAIL]) {
        errors[SIGNUP_FORM_FIELD_NAME.EMAIL] = "SIGN_UP.FIELD.LOGIN.ERRORS.REQUIRED"
    
    } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values[SIGNUP_FORM_FIELD_NAME.EMAIL])
    ) {
    errors[SIGNUP_FORM_FIELD_NAME.EMAIL] = "SIGN_UP.FIELD.LOGIN.ERRORS.WRONG"
    }else if (!values[SIGNUP_FORM_FIELD_NAME.PASSWORD]) {
        errors[SIGNUP_FORM_FIELD_NAME.PASSWORD] = "SIGN_UP.FIELD.PASSWORD.ERRORS.REQUIRED"
        }
    return errors
}

