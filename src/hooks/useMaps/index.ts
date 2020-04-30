import { useDispatch, useSelector } from 'react-redux';

import { UPDATE_COORDS } from 'actions';

import { RootState } from 'reducers';

export const useMaps = () => {
  const dispatch = useDispatch();

  const { coords, zoomLevel } = useSelector((state: RootState) => state.maps);

  const isGeolocationAvailable = 'geolocation' in navigator;

  const getGeolocation = (currentCoords: (coords: Coordinates) => void) => {
    navigator.geolocation.getCurrentPosition((position) => {
      currentCoords(position.coords);
    });
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
    coords,
    zoomLevel,
    isGeolocationAvailable,
    getGeolocation,
    setCoords,
    setZoomLevel,
  };
};
