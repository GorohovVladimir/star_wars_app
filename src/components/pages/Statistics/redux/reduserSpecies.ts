interface SteteInterface {
  species: ReadonlyArray<{}>;
  isFetch: boolean;
}

const initialState: SteteInterface = {
  species: [],
  isFetch: false,
};

const postSpeciesReducer = (
  state: SteteInterface = initialState,
  action: any
) => {
  if (action.type === "postSpecies/SET_SPECIES") {
    return {
      ...state,
      species: action.payload,
    };
  }
  return state;
};

export default postSpeciesReducer;
