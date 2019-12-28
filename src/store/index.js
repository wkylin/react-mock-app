import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from '../reducers';
import rootSaga from '../sagas';
import loggerMiddleware from '../middleware/logger';
import monitorReducerEnhancer from '../enhancers/monitorReducer';


const persistConfig = {
  key: 'persistRoot',
  storage,
  whitelist: [],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const sagaMiddleware = createSagaMiddleware();
const middleWares = [loggerMiddleware];
const storeEnhancers = compose(
  applyMiddleware(...middleWares, sagaMiddleware),
  monitorReducerEnhancer
);

const store = createStore(persistedReducer, undefined, storeEnhancers);
sagaMiddleware.run(rootSaga);

export default store;
