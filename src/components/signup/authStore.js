const initialState = {
  user: null,
  logged:false,
  error:false
};

const authStore=(state = initialState,action) =>{
  switch (action.type) {
    case 'SING_IN_SUCCESSFULL':
      return {
        ...state,
        user: action.payload,
        logged:true,
        error:false
      };
    case 'SING_IN_ERROR':
      return {
        ...state,
        error:true,
      };
      case 'RESER_STORE':
        return {
          
          ...initialState
      };
      

    default:
      return state;
  }
}

export default authStore