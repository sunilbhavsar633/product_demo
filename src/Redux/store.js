import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import sagaAction from './sagaAction';
import reducer from './reducer';

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
    reducer,
    middleware: [sagaMiddleware]
});
sagaMiddleware.run(sagaAction);
export default store;
