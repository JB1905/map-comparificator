import { UPDATE_COORDS, UPDATE_ZOOM_LEVEL } from '../actions';

const initialState = {
  coords: [37.415, 34.048333],
  zoom: 7,
};

export const mapsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case UPDATE_COORDS:
      return { ...state, coords: action.payload };

    case UPDATE_ZOOM_LEVEL:
      return { ...state, zoom: action.payload };

    default:
      return state;
  }
};
