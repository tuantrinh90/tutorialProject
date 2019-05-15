/*
Mr Nguyen Duc Hoang
https://www.youtube.com/c/nguyenduchoang
Email: sunlight4d@gmail.com
Create some sagas for FETCH_MOVIES, FETCH_SUCCEEDED, FETCH_FAILED
*/
import {FETCH_MOVIES, FETCH_SUCCEEDED, FETCH_FAILED} from '../actions/actionTypes';
//Saga effects
import {put, takeLatest, call} from 'redux-saga/effects';
import * as moviesApi from '../service/movieApi';

function* fetchMovies() {
    try {
        const receivedMovies = yield call(moviesApi.fetchMovies);
        console.log(receivedMovies)
        yield put({type: FETCH_SUCCEEDED, receivedMovies: receivedMovies});
    } catch (error) {
        yield put({type: FETCH_FAILED, error});
    }
}

export function* watchFetchMovies() {
    yield takeLatest(FETCH_MOVIES, fetchMovies);
}