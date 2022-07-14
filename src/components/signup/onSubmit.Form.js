import axios from "axios";

export async function onSubmitForm (values,{ setStatus }) {
    const data={
        password:values.password,
        login:values.email
    }
    try {
        await axios({
            method: 'post',
            url: 'https://eloboss-api-v2.herokuapp.com/auth/login',
            data:data})
            .then(res=>{
                if(res.status===201){
                    window.location.assign('http://localhost:3000/auth_successfully');
                }
            })
        setStatus('')

        }catch(error){
            setStatus("SIGN_UP.FIELD.PASSWORD.ERRORS.WRONG")
        }    
      ;
}