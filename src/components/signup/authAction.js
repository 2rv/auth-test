export const signInUserSuccessfull=(user)=>{
    return{
        type:'SING_IN_SUCCESSFULL',
        payload:user
    }
}


export const signInUserError=()=>{
    return{
        type:'SING_IN_ERROR',
    }
}

export const resetStore=()=>{
    return{
        type:'RESER_STORE',
    }
}