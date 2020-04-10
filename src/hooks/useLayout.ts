import { useSelector, useDispatch } from 'react-redux';

import { SET_LAYOUT } from '../actions';

import {
  gridLayout,
  columnLayout,
  mosaicLayout,
} from '../constants/initialLayout';

// import { compareObjects } from '../helpers/compareObjects';

export const useLayout = () => {
  const dispatch = useDispatch();

  const layout = useSelector((state: any) => state.layout);

  // const isInitialLayout = compareObjects(layout, initialLayout);

  const setLayout = (layout: object) => {
    dispatch({ type: SET_LAYOUT, payload: layout });
  };

  const availableLayouts = {
    Grid: gridLayout,
    Columns: columnLayout,
    Mosaic: mosaicLayout,
  };

  return {
    layout,
    setLayout,
    // isInitialLayout,
    availableLayouts,
  };
};
