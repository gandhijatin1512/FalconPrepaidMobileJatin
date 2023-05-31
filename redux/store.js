/* eslint-disable prettier/prettier */
/* eslint-disable no-alert */
/* eslint-disable prettier/prettier */
import {configureStore} from '@reduxjs/toolkit';
import CountReducer from './reducers/countReducer';
import createSagaMiddleware from 'redux-saga';
import sagaData from './saga';
import Reactotron from 'reactotron-react-native';

const sagaMonitor = Reactotron.createSagaMonitor();

const sagaMiddleware = createSagaMiddleware({sagaMonitor});

// const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store = configureStore({
  reducer: {
    count: CountReducer,
  },
  middleware: [sagaMiddleware],
  // middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
  enhancers: [Reactotron.createEnhancer()],
  devTools: true,
});

try {
sagaMiddleware.run(sagaData);
} catch (err) {
alert(err);
}
