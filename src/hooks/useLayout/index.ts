import { useSelector, useDispatch } from 'react-redux';
import {
  getPathToCorner,
  Corner,
  getNodeAtPath,
  MosaicDirection,
  getOtherDirection,
  updateTree,
  MosaicParent,
  MosaicNode,
} from 'react-mosaic-component';

import { SET_LAYOUT, CREATE_LAYOUT } from 'actions';

import { RootState } from 'reducers';

import { gridLayout, columnLayout, mosaicLayout } from 'constants/layouts';

import { Layout } from 'types/Layout';

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

  const openWindow = (windowName: string) => {
    let layoutTree: any;

    if (activeLayout) {
      const path = getPathToCorner(activeLayout, Corner.TOP_RIGHT);

      const parent = getNodeAtPath(activeLayout, path) as
        | MosaicParent<number>
        | any;

      const destination = getNodeAtPath(activeLayout, path) as
        | MosaicNode<number>
        | any;

      const direction: MosaicDirection = parent
        ? getOtherDirection(parent.direction)
        : 'row';

      let first: any;
      let second: any;

      if (direction === 'row') {
        first = destination;
        second = windowName;
      } else {
        first = windowName;
        second = destination;
      }

      layoutTree = updateTree(activeLayout, [
        {
          path,
          spec: {
            $set: {
              direction,
              first,
              second,
            },
          },
        },
      ]);
    } else {
      layoutTree = windowName;
    }

    setLayout(layoutTree);
  };

  return {
    activeLayout,
    customLayouts,
    setLayout,
    isEmptyLayout,
    availableLayouts,
    setLayoutAsPattern,
    openWindow,
  };
};
