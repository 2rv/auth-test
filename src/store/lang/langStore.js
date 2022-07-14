const initialState = {
    lang: 'ua',
  };
  
const langStore=(state = initialState,action)=> {
    switch (action.type) {
        case 'AUTH_SET_DATA':
        return {
            ...state,
            lang:action.payload
        };

        default:
            return state;
    }
}

export default langStore