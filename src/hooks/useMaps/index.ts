import { useDispatch } from 'react-redux';

import { useTypedSelector } from 'hooks/useTypedSelector';

import * as Actions from 'store/actions';

import type { Coords } from 'types/Coords';

export const useMaps = () => {
  const dispatch = useDispatch();

  const { coords, zoomLevel } = useTypedSelector((state) => state.maps);

  const setCoords = (coords: Coords) => {
    dispatch(Actions.updateCoords(coords));
  };

  const setZoomLevel = (zoomLevel: number) => {
    dispatch(Actions.updateZoomLevel(zoomLevel));
  };

  return {
    coords,
    setCoords,
    zoomLevel,
    setZoomLevel,
  };
};
