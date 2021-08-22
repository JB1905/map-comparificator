import { UPDATE_COORDS, UPDATE_ZOOM_LEVEL } from '../../actions';

import { MapsState } from 'types/MapsState';

import type { MapsActionTypes } from 'types/MapsActionTypes';

const initialState: MapsState = {
  coords: [37.7790262, -122.4199061],
  zoomLevel: 7,
};

export const mapsReducer = (state = initialState, action: MapsActionTypes) => {
  switch (action.type) {
    case UPDATE_COORDS:
      return { ...state, coords: action.payload };

    case UPDATE_ZOOM_LEVEL:
      return { ...state, zoomLevel: action.payload };

    default:
      return state;
  }
};
