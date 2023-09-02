import { combineReducers } from 'redux';
import weatherReducer from './reducer';

// All reducers are defined here, we have only one reducer
const rootReducer = combineReducers({
  weather: weatherReducer,
});

export default rootReducer;