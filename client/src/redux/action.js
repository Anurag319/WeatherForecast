import { FETCH_WEATHER_REQUEST } from "./constant";
import { FETCH_WEATHER_SUCCESS } from "./constant";
import { FETCH_WEATHER_FAILURE } from "./constant";

export const fetchWeatherRequest = (city) => {
    console.warn('action called' + city);
    return {
        type: FETCH_WEATHER_REQUEST,
        payload: { city }
    }
}

export const fetchWeatherSuccess = (data) => ({
    type: FETCH_WEATHER_SUCCESS,
    payload: data,
});

export const fetchWeatherFailure = (error) => ({
    type: FETCH_WEATHER_FAILURE,
    payload: error,
});