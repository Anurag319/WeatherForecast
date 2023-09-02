import { FETCH_WEATHER_REQUEST } from "./constant";
import { FETCH_WEATHER_SUCCESS } from "./constant";
import { FETCH_WEATHER_FAILURE } from "./constant";

// 3 actions need to take - first Weather request from Saga 
export const fetchWeatherRequest = (city) => {
    console.warn('action called' + city);
    return {
        type: FETCH_WEATHER_REQUEST,
        payload: { city }
    }
}

// Saga reply as success or failure 
export const fetchWeatherSuccess = (data) => ({
    type: FETCH_WEATHER_SUCCESS,
    payload: data,
});

export const fetchWeatherFailure = (error) => ({
    type: FETCH_WEATHER_FAILURE,
    payload: error,
});