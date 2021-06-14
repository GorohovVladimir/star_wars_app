import { PlanetInterface } from "../interfaces";

interface StateIntarface {
  posts: ReadonlyArray<PlanetInterface>;
  isFetch: boolean;
}

const initialState = {
  posts: [],
  isFetch: false,
};

const postReducer = (state: StateIntarface = initialState, action: any) => {
  if (action.type === "postsList/SET_POSTS") {
    return {
      ...state,
      posts: action.payload,
    };
  }
  return state;
};

export default postReducer;
