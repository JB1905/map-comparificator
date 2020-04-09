import { combineReducers } from 'redux';

import { mapsReducer } from './mapsReducer';
import { themeReducer } from './themeReducer';
import { layoutReducer } from './layoutReducer';

const rootRecucer = combineReducers({
  maps: mapsReducer,
  theme: themeReducer,
  layout: layoutReducer,
});

export default rootRecucer;
