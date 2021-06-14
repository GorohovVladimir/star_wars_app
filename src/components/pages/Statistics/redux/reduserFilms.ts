interface SteteInterface {
  films: ReadonlyArray<{}>;
  isFetch: boolean;
}

const initialState: SteteInterface = {
  films: [],
  isFetch: false,
};

const postFilmsReducer = (
  state: SteteInterface = initialState,
  action: any
) => {
  if (action.type === "postFilms/SET_FILMS") {
    return {
      ...state,
      films: action.payload,
    };
  }
  return state;
};

export default postFilmsReducer;
