import {configureStore} from '@reduxjs/toolkit';
import counterReducer from "../reducers/counterReducer";
import logger from 'redux-logger';
import {apiReducer} from '../../src/reducers/apiReducer';

const store = configureStore({
    reducer:{
        counter:counterReducer,
        apiReducer : apiReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})
export {
    store
}