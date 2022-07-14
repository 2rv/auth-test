const initialState = {
  user: null,
};

const authStore=(state = initialState,action) =>{
  switch (action.type) {
    case 'AUTH_SET_DATA':
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
}

export default authStore