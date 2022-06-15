import { GET_MOVIES, GET_MOVIE_DETAIL } from "../constants";

export const getMovies = (term?: any) => ({
  type: GET_MOVIES,
  payload: term,
});

export const getMovieDetail = (id: any) => ({
  type: GET_MOVIE_DETAIL,
  payload: id,
});
