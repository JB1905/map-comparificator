import { combineReducers } from 'redux';

import { mapsReducer } from './mapsReducer';
import { themeReducer } from './themeReducer';
import { layoutReducer } from './layoutReducer';
import { searchReducer } from './searchReducer';
import { settingsReducer } from './settingsReducer';

const rootRecucer = combineReducers({
  maps: mapsReducer,
  theme: themeReducer,
  layout: layoutReducer,
  search: searchReducer,
  settings: settingsReducer,
});

export default rootRecucer;
