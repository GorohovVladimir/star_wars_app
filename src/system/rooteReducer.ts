import {combineReducers} from "redux";
import postsReducer from 'components/PostsList/redux/reducer';
import postFilmsReduser from 'components/pages/Statistics/redux/reduserFilms';
import postPeopleReduser from 'components/pages/Statistics/redux/reduserPeople';
import postSpeciesReduser from 'components/pages/Statistics/redux/reduserSpecies';
import postStarshipsReduser from 'components/pages/Statistics/redux/reduserStarships';
import postVechiclesReduser from 'components/pages/Statistics/redux/reduserVehicles';
import postNameReducer from '../lib/onClickPlanet/reduser'



export default combineReducers({
posts: postsReducer,
films: postFilmsReduser,
people: postPeopleReduser,
species: postSpeciesReduser,
starship: postStarshipsReduser,
vehicles: postVechiclesReduser,
name: postNameReducer,

});