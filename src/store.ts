import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducer from 'reducers';

const persistConfig = {
  key: 'store',
  storage,
  blacklist: ['searchResults'],
};

const store = createStore(
  persistReducer(persistConfig, rootReducer),
  compose(applyMiddleware(thunk), composeWithDevTools())
);

persistStore(store);

export default store;
