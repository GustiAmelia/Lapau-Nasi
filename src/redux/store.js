import {createStore,applyMiddleware} from 'redux';
import rpm from 'redux-promise-middleware';
import {createLogger} from 'redux-logger';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import indexReducer from './reducers/index';

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, indexReducer)

const logger =createLogger()
const enhancers = applyMiddleware(rpm,logger);
// const store=createStore(indexReducer,enhancers);

const store = createStore(persistedReducer, enhancers)
const persiststor = persistStore(store)

export {store, persiststor}

