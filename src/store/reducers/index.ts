import { combineReducers } from 'redux';

import { mapsReducer } from './mapsReducer';
import { themeReducer } from './themeReducer';
import { layoutReducer } from './layoutReducer';
import { searchResultsReducer } from './searchResultsReducer';
import { searchHistoryReducer } from './searchHistoryReducer';
import { customizationReducer } from './customizationReducer';
import { centeringModesReducer } from './centeringModesReducer';
import { modalReducer } from './modalReducer';

const rootReducer = combineReducers({
  maps: mapsReducer,
  theme: themeReducer,
  layout: layoutReducer,
  searchResults: searchResultsReducer,
  searchHistory: searchHistoryReducer,
  customization: customizationReducer,
  centeringModes: centeringModesReducer,
  modal: modalReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
