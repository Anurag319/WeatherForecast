
// import {createStore} from 'redux';
import rootReducer from './rootReducer';
import {configureStore} from '@reduxjs/toolkit'
import weatherSaga from './saga';
import createSagaMiddleware from 'redux-saga';

// const store = createStore(rootReducer);
const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
    reducer:rootReducer,
    middleware: ()=> [sagaMiddleware]
})

sagaMiddleware.run(weatherSaga);
export default store;