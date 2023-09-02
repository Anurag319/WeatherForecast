import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { FETCH_WEATHER_REQUEST } from "./constant";
import { fetchWeatherFailure,fetchWeatherSuccess } from './action';

// Use to fetch request from Weather API and then pass to action
function* fetchWeather(action) {
  try {
    const { city } = action.payload;
    const apiKey = '42f4355977d6047781e352845cd13e69';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const response = yield call(axios.get, apiUrl);

    yield put(fetchWeatherSuccess(response.data));
  } catch (error) {
    yield put(fetchWeatherFailure(`Please Enter valid city name`));
  }
}

function* weatherSaga() {
  yield takeLatest(FETCH_WEATHER_REQUEST, fetchWeather);
}

export default weatherSaga;
