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
import deepEqual from 'deep-equal';
import { useTranslation } from 'react-i18next';

import * as Actions from 'actions';

import { RootState } from 'reducers';

import { gridLayout, columnLayout, mosaicLayout } from 'constants/layouts';

import type { Layout } from 'types/Layout';

export const useLayout = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const { activeLayout, customLayouts } = useSelector(
    (state: RootState) => state.layout
  );

  const isEmptyLayout = activeLayout === null;

  const initialLayouts = [
    { name: t('initialLayout.grid'), layout: gridLayout },
    { name: t('initialLayout.columns'), layout: columnLayout },
    { name: t('initialLayout.mosaic'), layout: mosaicLayout },
  ];

  const findExistingLayout = (name?: string, isPatternIncluded?: boolean) => {
    // TODO
    return Array.from(initialLayouts /*, customLayouts*/).find(
      (layout: any) => {
        const isEqualPattern = deepEqual(layout.layout, activeLayout);

        if (name) {
          const isEqualName = layout.name === name;

          return isPatternIncluded
            ? isEqualPattern || isEqualName
            : isEqualName;
        }

        return isEqualPattern;
      }
    );
  };

  const setActiveLayout = (layout: Layout) => {
    dispatch(Actions.setActiveLayout(layout));
  };

  const createCustomLayout = (name: string) => {
    dispatch(
      Actions.createCustomLayout({
        name,
        layout: activeLayout,
      })
    );
  };

  const renameCustomLayout = (currentId: string, updatedId: string) => {
    dispatch(Actions.renameCustomLayout({ currentId, updatedId }));
  };

  const removeCustomLayout = (id: string) => {
    dispatch(Actions.removeCustomLayout(id));
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

    setActiveLayout(layoutTree);
  };

  return {
    activeLayout,
    customLayouts,
    setActiveLayout,
    findExistingLayout,
    isEmptyLayout,
    initialLayouts,
    createCustomLayout,
    renameCustomLayout,
    removeCustomLayout,
    openWindow,
  };
};
