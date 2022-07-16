const initialState = {
  lang: "ua",
};

const langStore = (state = initialState, action) => {
  switch (action.type) {
    case "SET_LANG":
      return {
        ...state,
        lang: action.payload,
      };

    default:
      return state;
  }
};

export default langStore;
