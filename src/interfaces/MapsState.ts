import { UPDATE_COORDS, UPDATE_ZOOM_LEVEL } from 'actions';

export interface MapsState {
  coords: [number, number];
  zoomLevel: number;
}

export interface UpdatCoordsAction {
  type: typeof UPDATE_COORDS;
  payload: [number, number];
}

export interface UpdateZoomLevelAction {
  type: typeof UPDATE_ZOOM_LEVEL;
  payload: number;
}
