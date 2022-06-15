import { combineReducers } from "redux";
import { GET_MOVIES, RECEIVE_MOVIES, RECEIVE_MOVIE_DETAIL } from "../constants";

const MovieReducer = (state = {}, action: any) => {
  switch (action.type) {
     case GET_MOVIES:
        return { ...state};
    case RECEIVE_MOVIES:
      return { ...state, movies: action.payload.movies};
    case RECEIVE_MOVIE_DETAIL:
      return { ...state, movie: action.payload.movie};
    default:
      return state;
   }
};

const rootReducer = combineReducers({
  MovieReducer,
});

export default rootReducer;