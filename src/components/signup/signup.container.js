import React, { useEffect } from "react";
import axios from "axios";
import SignUpComponent from "./signup.component";
import { singupValidation } from "./validation";
import {useDispatch,useSelector} from "react-redux";
import {SIGNUP_FORM_FIELD_NAME} from "./constants"
import { signInUserSuccessfull,signInUserError,resetStore } from "./authAction";
import { useNavigate } from "react-router-dom";
import {AUTH_LOGIN_API} from "./constants";

export default function SignUpContainer (){
    useEffect(()=>{
        dispatch(resetStore())
    },[])
    
    const navigate=useNavigate()
    const dispatch=useDispatch()

    const state=useSelector(({AUTH})=>AUTH)
    
    const fieldEmail=SIGNUP_FORM_FIELD_NAME.EMAIL
    const fieldPassword=SIGNUP_FORM_FIELD_NAME.PASSWORD
    
    const onSubmitForm =async (values,{ setStatus }) => {
        const data={
            password:values.password,
            login:values.email
        }
        try {
            await axios({
                method: 'post',
                url:AUTH_LOGIN_API ,
                data:data})
                .then(res=>{
                    if(res.status===201){
                        dispatch(signInUserSuccessfull(data.login))
                        navigate('/auth_successfully')
                    }
                })

            }catch(error){
                dispatch(signInUserError())
            }    
          ;
    }
    return(    
        <SignUpComponent 
            onSubmitForm={onSubmitForm}
            singupValidation={singupValidation}
            fieldEmail={fieldEmail}
            fieldPassword={fieldPassword}
            error={state.error}
        />
)}


