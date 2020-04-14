import { combineReducers } from 'redux';

import { mapsReducer } from './mapsReducer';
import { themeReducer } from './themeReducer';
import { layoutReducer } from './layoutReducer';
import { searchResultsReducer } from './searchResultsReducer';
import { searchHistoryReducer } from './searchHistoryReducer';
import { settingsReducer } from './settingsReducer';

const rootRecucer = combineReducers({
  maps: mapsReducer,
  theme: themeReducer,
  layout: layoutReducer,
  searchResults: searchResultsReducer,
  searchHistory: searchHistoryReducer,
  settings: settingsReducer,
});

export default rootRecucer;
