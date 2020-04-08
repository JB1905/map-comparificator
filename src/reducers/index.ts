import { combineReducers } from 'redux';

import { mapsReducer } from './mapsReducer';
import { themeReducer } from './themeReducer';

const rootRecucer = combineReducers({
  maps: mapsReducer,
  theme: themeReducer,
});

export default rootRecucer;
