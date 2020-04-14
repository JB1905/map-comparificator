import { combineReducers } from 'redux';

import { mapsReducer } from './mapsReducer';
import { themeReducer } from './themeReducer';
import { layoutReducer } from './layoutReducer';
import { searchResultsReducer } from './searchResultsReducer';
import { searchHistoryReducer } from './searchHistoryReducer';
import { settingsReducer } from './settingsReducer';

const rootReducer = combineReducers({
  maps: mapsReducer,
  theme: themeReducer,
  layout: layoutReducer,
  searchResults: searchResultsReducer,
  searchHistory: searchHistoryReducer,
  settings: settingsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
