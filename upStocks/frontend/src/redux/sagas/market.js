import { call, put, takeLatest, all } from 'redux-saga/effects';
import axios from 'axios';
import { types } from '../actions';

export function* fetchHistoricalData() {
  try {
    const url = `http://kaboom.rksv.net/api/historical`;
    const response = yield call(axios.get, url);
    yield put({
      type: types.FETCH_HISTORICAL_SUCCESS,
      data: response.data
    });
  } catch (error) {
    console.log('Request failed! Could not fetch dictionary data.');
    yield put({
      type: types.FETCH_HISTORICAL_FAIL,
      data: error
    });
  }
}

export function* market() {
  yield all([
    takeLatest(types.FETCH_HISTORICAL_LOAD, fetchHistoricalData)
  ])
}