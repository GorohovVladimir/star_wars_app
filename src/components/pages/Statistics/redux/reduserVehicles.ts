interface SteteInterface {
  vehicles: ReadonlyArray<{}>;
  isFetch: boolean;
}

const initialState: SteteInterface = {
  vehicles: [],
  isFetch: false,
};

const postVehiclesReducer = (
  state: SteteInterface = initialState,
  action: any
) => {
  if (action.type === "postVehicles/SET_VEHICLES") {
    return {
      ...state,
      vehicles: action.payload,
    };
  }
  return state;
};

export default postVehiclesReducer;
