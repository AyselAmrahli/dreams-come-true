import { put, takeLatest, all, call } from 'redux-saga/effects';
import axios from 'axios';

import { getApiUrl } from '../../const/constant';
import { GET_MOVIES, GET_MOVIE_DETAIL, RECEIVE_MOVIES, RECEIVE_MOVIE_DETAIL } from '../constants';


function* fetchMovies({payload: term}: any) {
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

function* fetchMovieDetail({payload: id}: any) {
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

export default function* rootSaga() {
   yield all([
    watchFetchMovies(),
    watchFetchMovieDetail(),
   ]);
}