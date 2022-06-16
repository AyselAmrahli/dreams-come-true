import { put, takeLatest, all, call } from 'redux-saga/effects';
import axios from 'axios';

import { getApiUrl } from '../../const/constant';
import { GET_FAVOURITE_LIST, GET_MOVIES, GET_MOVIE_DETAIL, GET_WATCH_LIST, RECEIVE_FAVOURITE_LIST, RECEIVE_MOVIES, RECEIVE_MOVIE_DETAIL, RECEIVE_WATCH_LIST } from '../constants';


export function* fetchMovies({payload: term}: any) {
  try {
    const { data } = yield call(axios.get, getApiUrl(`movie/popular`, term), )
    yield put({ type: RECEIVE_MOVIES, payload: { movies: data.results } })
  } catch (e) {
    console.log(e)
  }
}

function* watchFetchMovies() {
  yield takeLatest(GET_MOVIES, fetchMovies)
}

export function* fetchMovieDetail({payload: id}: any) {
  try {
    const { data } = yield call(axios.get, getApiUrl(`movie/${id}`))
    yield put({ type: RECEIVE_MOVIE_DETAIL, payload: { movie: data } })
  } catch (e) {
    console.log(e)
  }
}

function* watchFetchMovieDetail() {
     yield takeLatest(GET_MOVIE_DETAIL, fetchMovieDetail)
}

export function* fetchWatchList({payload: list}: any) {
  try {
    const { data } = yield call(axios.get, getApiUrl(`movie/popular`), )
    const results = data.results.filter((res: any) => list.includes(res.id))
    yield put({ type: RECEIVE_WATCH_LIST, payload: { watchList: results } })
  } catch (e) {
    console.log(e)
  }
}

function* watchFetchWatchList() {
     yield takeLatest(GET_WATCH_LIST, fetchWatchList)
}

export function* fetchFavList({payload: list}: any) {
  try {
    const { data } = yield call(axios.get, getApiUrl(`movie/popular`), )
    const results = data.results.filter((res: any) => list.includes(res.id))
    yield put({ type: RECEIVE_FAVOURITE_LIST, payload: { favList: results } })
  } catch (e) {
    console.log(e)
  }
}

function* watchFetchFavList() {
     yield takeLatest(GET_FAVOURITE_LIST, fetchFavList)
}

export default function* rootSaga() {
   yield all([
    watchFetchMovies(),
    watchFetchMovieDetail(),
    watchFetchWatchList(),
    watchFetchFavList(),
   ]);
}