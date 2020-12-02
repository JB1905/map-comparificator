export const UPDATE_COORDS = 'UPDATE_COORDS';
export const UPDATE_ZOOM_LEVEL = 'UPDATE_ZOOM_LEVEL';

export const updateCoords = (payload: [number, number]) => ({
  type: UPDATE_COORDS,
  payload,
});

export const updateZoomLevel = (payload: number) => ({
  type: UPDATE_ZOOM_LEVEL,
  payload,
});
