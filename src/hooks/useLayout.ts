import { useSelector, useDispatch } from 'react-redux';
import { MosaicParent } from 'react-mosaic-component';

import { SET_LAYOUT } from '../actions';

import {
  gridLayout,
  columnLayout,
  mosaicLayout,
} from '../constants/initialLayout';

type Layout = string | number | MosaicParent<React.ReactText> | null;

export const useLayout = () => {
  const dispatch = useDispatch();

  const layout = useSelector((state: { layout: Layout }) => state.layout);

  const isEmptyLayout = layout === null;

  const availableLayouts = {
    grid: gridLayout,
    columns: columnLayout,
    mosaic: mosaicLayout,
  };

  const setLayout = (layout: Layout) => {
    dispatch({ type: SET_LAYOUT, payload: layout });
  };

  return {
    layout,
    setLayout,
    isEmptyLayout,
    availableLayouts,
  };
};
