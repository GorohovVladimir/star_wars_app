interface SteteInterface {
  starship: ReadonlyArray<{}>;
  isFetch: boolean;
}

const initialState: SteteInterface = {
  starship: [],
  isFetch: false,
};

const postStarshipsReducer = (
  state: SteteInterface = initialState,
  action: any
) => {
  if (action.type === "postStarship/SET_STARSHIP") {
    return {
      ...state,
      starship: action.payload,
    };
  }
  return state;
};

export default postStarshipsReducer;
