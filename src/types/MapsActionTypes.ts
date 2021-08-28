import { UPDATE_COORDS, UPDATE_ZOOM_LEVEL } from 'store/actions';

import type { Coords } from 'types/Coords';

export interface MapsState {
  readonly coords: Coords;
  readonly zoomLevel: number;
}

interface UpdatCoordsAction {
  readonly type: typeof UPDATE_COORDS;
  readonly payload: Coords;
}

interface UpdateZoomLevelAction {
  readonly type: typeof UPDATE_ZOOM_LEVEL;
  readonly payload: number;
}


export type MapsActionTypes = UpdatCoordsAction | UpdateZoomLevelAction;
