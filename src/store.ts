import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import storage from 'redux-persist/lib/storage';

import rootReducer, { RootState } from 'reducers';

const persistConfig = {
  key: 'store',
  storage,
  blacklist: ['searchResults', 'modal'],
  stateReconciler: autoMergeLevel2,
};

export const store = createStore(
  persistReducer<RootState>(persistConfig, rootReducer),
  composeWithDevTools(applyMiddleware(thunk))
);

export const persistor = persistStore(store);
