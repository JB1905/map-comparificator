import { SEARCH, SYNC_TYPE } from '../actions';

const initialState = {
  query: '',
  sync: 'center',
  coords: [37.415, -122.048333]
};

export const mapsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SEARCH:
      return { ...state, query: action.payload };

    case SYNC_TYPE:
      return { ...state, sync: action.payload };

    default:
      return state;
  }
};
