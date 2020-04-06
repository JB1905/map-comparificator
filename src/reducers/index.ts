import { combineReducers } from 'redux';

import { mapsReducer } from './mapsReducer';

const rootRecucer = combineReducers({
  maps: mapsReducer,
});

export default rootRecucer;
