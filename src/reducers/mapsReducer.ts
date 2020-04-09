import { UPDATE_COORDS, SYNC_TYPE } from '../actions';

const initialState = {
  sync: 'center',
  coords: [37.415, 34.048333],
  zoom: 7,
};

export const mapsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case UPDATE_COORDS:
      return { ...state, coords: action.payload };

    case SYNC_TYPE:
      return { ...state, sync: action.payload };

    default:
      return state;
  }
};
