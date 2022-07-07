import { IActionType } from "../../const/model";
import { ADD_FAV_LIST, ADD_WATCH_LIST, GET_FAV_LIST, GET_MOVIES, GET_MOVIE_DETAIL, GET_REQUEST_SESSION, GET_REQUEST_TOKEN, GET_WATCH_LIST } from "../constants";

export const getRequestToken = (): IActionType => ({
  type: GET_REQUEST_TOKEN,
});

export const getRequestSession = (request_token: string): IActionType => ({
  type: GET_REQUEST_SESSION,
  payload: request_token
});

export const getMovies = (term?: string): IActionType => ({
  type: GET_MOVIES,
  payload: term,
});

export const getMovieDetail = (id?: string): IActionType => ({
  type: GET_MOVIE_DETAIL,
  payload: id,
});

export const addWatchList = (id?: number): IActionType => ({
  type: ADD_WATCH_LIST,
  payload: id,
});

export const getWatchList = (): IActionType => ({
  type: GET_WATCH_LIST,
});
export const addFavList = (id?: number): IActionType => ({
  type: ADD_FAV_LIST,
  payload: id,
});

export const getFavList = (): IActionType => ({
  type: GET_FAV_LIST,
})