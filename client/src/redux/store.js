

import rootReducer from './rootReducer';
import {configureStore} from '@reduxjs/toolkit'
import weatherSaga from './saga';
import createSagaMiddleware from 'redux-saga';

// Allow to pass value to any where in application, as in weather.js
const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
    reducer:rootReducer,
    middleware: ()=> [sagaMiddleware]
})

sagaMiddleware.run(weatherSaga);
export default store;