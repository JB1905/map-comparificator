import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers';

import { loadState, saveState } from './helpers/storeManager';

const persistedState = loadState();

const store = createStore(rootReducer, persistedState, composeWithDevTools());

store.subscribe(() => {
  saveState({
    theme: store.getState().theme,
  });
});

export default store;
