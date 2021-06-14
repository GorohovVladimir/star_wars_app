import { PlanetInterface } from "../interfaces";

export const setPostsAction = (posts: ReadonlyArray<PlanetInterface>) => ({
  type: "postsList/SET_POSTS",
  payload: posts,
});

export const setFilmsAction = (films: any) => ({
  type: "postFilms/SET_FILMS",
  payload: films,
});
