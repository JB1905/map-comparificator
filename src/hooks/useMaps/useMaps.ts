import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { useTypedSelector } from 'hooks/useTypedSelector';

import * as Actions from 'store/actions';

import type { Coords } from 'types/Coords';

type SetCoordsCallback = (coords: Coords) => void;
type SetZoomLevelCallback = (zoomLevel: number) => void;

export const useMaps = () => {
  const dispatch = useDispatch();

  const { coords, zoomLevel } = useTypedSelector((state) => state.maps);

  const setCoords = useCallback<SetCoordsCallback>(
    (coords: Coords) => {
      dispatch(Actions.updateCoords(coords));
    },
    [dispatch]
  );

  const setZoomLevel = useCallback<SetZoomLevelCallback>(
    (zoomLevel: number) => {
      dispatch(Actions.updateZoomLevel(zoomLevel));
    },
    [dispatch]
  );

  return {
    coords,
    setCoords,
    zoomLevel,
    setZoomLevel,
  };
};
