// import {configureStore, applyMiddleWare} from 'redux';
// import logger from 'redux-logger';
// import rootReducer from './root-reducer';

// const middlewares = [logger];
// const store = configureStore(rootReducer,applyMiddleWare(...middlewares));


// export default store;

import { configureStore } from '@reduxjs/toolkit'

export default configureStore({
  reducer: {},
})