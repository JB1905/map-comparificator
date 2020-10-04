export const UPDATE_COORDS = 'UPDATE_COORDS';
export const UPDATE_ZOOM_LEVEL = 'UPDATE_ZOOM_LEVEL';

// TODO
export const updateCoords = (
  payload: any /*[number, number]*/ /*number[]*/
) => ({
  type: UPDATE_COORDS,
  payload,
});

export const updateZoomLevel = (payload: number) => ({
  type: UPDATE_ZOOM_LEVEL,
  payload,
});
