import { IActionType } from "../../const/model";
import { GET_FAVOURITE_LIST, GET_MOVIES, GET_MOVIE_DETAIL, GET_WATCH_LIST } from "../constants";

export const getMovies = (term?: string): IActionType => ({
  type: GET_MOVIES,
  payload: term,
});

export const getMovieDetail = (id?: string): IActionType => ({
  type: GET_MOVIE_DETAIL,
  payload: id,
});

export const getWatchList = (list?: Array<string>): IActionType => ({
  type: GET_WATCH_LIST,
  payload: list,
});

export const getFavList = (list?: Array<string>): IActionType => ({
  type: GET_FAVOURITE_LIST,
  payload: list
})