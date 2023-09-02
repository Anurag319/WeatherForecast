// src/redux/sagas.js
import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { FETCH_WEATHER_REQUEST } from "./constant";
import { fetchWeatherFailure,fetchWeatherSuccess } from './action';

function* fetchWeather(action) {
  try {
    const { city } = action.payload;
    const apiKey = '42f4355977d6047781e352845cd13e69'; // Replace with your API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    const response = yield call(axios.get, apiUrl);

    yield put(fetchWeatherSuccess(response.data));
  } catch (error) {
    yield put(fetchWeatherFailure(error.message));
  }
}

function* weatherSaga() {
  yield takeLatest(FETCH_WEATHER_REQUEST, fetchWeather);
}

export default weatherSaga;
