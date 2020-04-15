import { useDispatch } from 'react-redux';

import { UPDATE_COORDS } from '../actions';

export const useGeolocation = () => {
  const dispatch = useDispatch();

  const getGeolocation = (currentCoords: (coords: Coordinates) => void) => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        currentCoords(position.coords);
      });
    }
  };

  const setCoords = (coords: [number, number]) => {
    dispatch({
      type: UPDATE_COORDS,
      payload: coords,
    });
  };

  const setZoomLevel = (zoomLevel: number) => {
    dispatch({ type: setZoomLevel, payload: zoomLevel });
  };

  return {
    getGeolocation,
    setCoords,
    setZoomLevel,
  };
};
