interface SteteInterface {
  name: ReadonlyArray<{}>;
  isFetch: boolean;
}

const initialState: SteteInterface = {
  name: [],
  isFetch: false,
};

const postNameReducer = (state: SteteInterface = initialState, action: any) => {
  if (action.type === "postName/SET_NAME") {
    return {
      ...state,
      name: action.payload,
    };
  }
  return state;
};

export default postNameReducer;
