import { useSelector, useDispatch } from 'react-redux';

import { SET_LAYOUT, CREATE_LAYOUT } from '../actions';

import { RootState } from '../reducers';

import { gridLayout, columnLayout, mosaicLayout } from '../layouts';

import { Layout } from '../reducers/layoutReducer';

export const useLayout = () => {
  const dispatch = useDispatch();

  const { activeLayout, customLayouts } = useSelector(
    (state: RootState) => state.layout
  );

  const isEmptyLayout = activeLayout === null;

  const availableLayouts = [
    { name: 'Grid', layout: gridLayout },
    { name: 'Columns', layout: columnLayout },
    { name: 'Mosaic', layout: mosaicLayout },
  ];

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

  return {
    activeLayout,
    customLayouts,
    setLayout,
    isEmptyLayout,
    availableLayouts,
    setLayoutAsPattern,
  };
};
