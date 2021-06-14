export const setFilmsAction = (films: any) => ({
  type: "postFilms/SET_FILMS",
  payload: films,
});

export const setPeopleAction = (people: any) => ({
  type: "postPeole/SET_PEOPLE",
  payload: people,
});

export const setSpeciesAction = (species: any) => ({
  type: "postSpecies/SET_SPECIES",
  payload: species,
});

export const setStarshipsAction = (starship: any) => ({
  type: "postStarship/SET_STARSHIP",
  payload: starship,
});

export const setVehiclesAction = (vehicles: any) => ({
  type: "postVehicles/SET_VEHICLES",
  payload: vehicles,
});
