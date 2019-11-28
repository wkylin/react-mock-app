import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from '../reducers';
import rootSaga from '../sagas';

const persistConfig = {
  key: 'persistRoot',
  storage,
  whitelist: [],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const sagaMiddleware = createSagaMiddleware();
const middleWares = [];
const storeEnhancers = compose(
  applyMiddleware(...middleWares, sagaMiddleware)
);

const store = createStore(persistedReducer, storeEnhancers);
sagaMiddleware.run(rootSaga);

export default store;
