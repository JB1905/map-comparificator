import { useDispatch, useSelector } from 'react-redux';

import * as Actions from 'actions';

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
    dispatch(Actions.updateCoords(coords));
  };

  const setZoomLevel = (zoomLevel: number) => {
    dispatch(Actions.updateZoomLevel(zoomLevel));
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
