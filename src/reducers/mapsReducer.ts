import { UPDATE_COORDS, UPDATE_ZOOM_LEVEL } from '../actions';

interface MapsState {
  coords: [number, number];
  zoom: number;
}

interface UpdatCoordsAction {
  type: typeof UPDATE_COORDS;
  payload: [number, number];
}

interface UpdateZoomLevelAction {
  type: typeof UPDATE_ZOOM_LEVEL;
  payload: number;
}

type MapsActionTypes = UpdatCoordsAction | UpdateZoomLevelAction;

const initialState: MapsState = {
  coords: [37.7790262, -122.4199061],
  zoom: 7,
};

export const mapsReducer = (state = initialState, action: MapsActionTypes) => {
  switch (action.type) {
    case UPDATE_COORDS:
      return { ...state, coords: action.payload };

    case UPDATE_ZOOM_LEVEL:
      return { ...state, zoom: action.payload };

    default:
      return state;
  }
};
