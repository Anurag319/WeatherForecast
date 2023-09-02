import { FETCH_WEATHER_REQUEST } from "./constant";
import { FETCH_WEATHER_SUCCESS } from "./constant";
import { FETCH_WEATHER_FAILURE } from "./constant";


const initialState = {
    data: null,
    loading: false,
    error: null
};

// All operations beforing going to store perform here, setting data,loading and error state in all 3 actions
const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_WEATHER_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case FETCH_WEATHER_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
            };
        case FETCH_WEATHER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default weatherReducer;