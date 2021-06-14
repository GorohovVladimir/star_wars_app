const initialState: any = {
  name: [],
  isFetch: false,
};

const postNameReducer = (state: any = initialState, action: any) => {
  if (action.type === "postName/SET_NAME") {
    return {
      ...state,
      name: action.payload,
    };
  }
  return state;
};

export default postNameReducer;
