import { useSelector, useDispatch } from 'react-redux';
import { MosaicParent } from 'react-mosaic-component';

import { SET_LAYOUT, CREATE_LAYOUT } from '../actions';

import {
  gridLayout,
  columnLayout,
  mosaicLayout,
} from '../constants/initialLayout';

type Layout = string | number | MosaicParent<React.ReactText> | null;

export const useLayout = () => {
  const dispatch = useDispatch();

  const { activeLayout, customLayouts } = useSelector(
    (state: { layout: { activeLayout: Layout; customLayouts: any } }) =>
      state.layout
  );

  const isEmptyLayout = activeLayout === null;

  const availableLayouts = {
    grid: gridLayout,
    columns: columnLayout,
    mosaic: mosaicLayout,
  };

  const setLayout = (layout: Layout) => {
    dispatch({ type: SET_LAYOUT, payload: layout });
  };

  const setLayoutAsPattern = () => {
    dispatch({
      type: CREATE_LAYOUT,
      payload: {
        name: 'custom-layout',
        layout: activeLayout,
      },
    });
  };

  // console.log(customLayouts);

  return {
    activeLayout,
    customLayouts,
    setLayout,
    isEmptyLayout,
    availableLayouts,
    setLayoutAsPattern,
  };
};
