import { useDispatch, useSelector } from 'react-redux';

import * as Actions from 'store/actions';

import { RootState } from 'store/reducers';

export const useMaps = () => {
  const dispatch = useDispatch();

  const { coords, zoomLevel } = useSelector((state: RootState) => state.maps);

  const isGeolocationAvailable = 'geolocation' in navigator;

  const getGeolocation = (
    currentCoords: (coords: GeolocationCoordinates) => void
  ) => {
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
