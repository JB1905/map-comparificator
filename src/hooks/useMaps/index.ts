import { useDispatch, useSelector } from 'react-redux';

import { updateCoords, updateZoomLevel } from 'actions';

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

  const setC = (coords: /*[number, number]*/ any) => {
    // TODO
    dispatch(updateCoords(coords));
  };

  const setZ = (zoomLevel: number) => {
    dispatch(updateZoomLevel(zoomLevel));
  };

  return {
    coords,
    zoomLevel,
    isGeolocationAvailable,
    getGeolocation,
    setCoords: setC,
    setZoomLevel: setZ,
  };
};
