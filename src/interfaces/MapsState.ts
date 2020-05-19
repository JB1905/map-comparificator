import { UPDATE_COORDS, UPDATE_ZOOM_LEVEL } from 'actions';

export interface MapsState {
  readonly coords: [number, number];
  readonly zoomLevel: number;
}

export interface UpdatCoordsAction {
  readonly type: typeof UPDATE_COORDS;
  readonly payload: [number, number];
}

export interface UpdateZoomLevelAction {
  readonly type: typeof UPDATE_ZOOM_LEVEL;
  readonly payload: number;
}
