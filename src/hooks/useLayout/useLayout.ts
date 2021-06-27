import { useDispatch } from 'react-redux';
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
import { useCallback, useMemo } from 'react';

import { useTypedSelector } from 'hooks/useTypedSelector';

import * as Actions from 'store/actions';

import { gridLayout, columnLayout, mosaicLayout } from 'constants/layouts';

import type { Layout } from 'types/Layout';

type SetActiveLayoutCallback = (layout: Layout) => void;
type ClearLayoutCallback = () => void;
type CreateCustomLayoutCallback = (name: string) => void;
type RenameCustomLayoutCallback = (
  currentName: string,
  updatedName: string
) => void;
type RemoveCustomLayoutCallback = (id: string) => void;

// TODO? rename hook
// useLayoutActions

export const useLayout = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const { activeLayout, customLayouts } = useTypedSelector(
    (state) => state.layout
  );

  const isEmptyLayout = useMemo(() => activeLayout === null, [activeLayout]);

  const initialLayouts = useMemo(
    () => [
      { name: t('initialLayout.grid'), layout: gridLayout },
      { name: t('initialLayout.columns'), layout: columnLayout },
      { name: t('initialLayout.mosaic'), layout: mosaicLayout },
    ],
    [t]
  );

  // TODO useCallback/useMemo isExistingLayout
  const findExistingLayout = (name?: string, isPatternIncluded?: boolean) => {
    // TODO refactor
    return [...initialLayouts, ...customLayouts].find((layout) => {
      const isEqualPattern = deepEqual(layout.layout, activeLayout);

      if (name) {
        const isEqualName = layout.name === name;

        return isPatternIncluded ? isEqualPattern || isEqualName : isEqualName;
      }

      return isEqualPattern;
    });
  };

  const setActiveLayout = useCallback<SetActiveLayoutCallback>(
    (layout) => {
      dispatch(Actions.setActiveLayout(layout));
    },
    [dispatch]
  );

  const clearLayout = useCallback<ClearLayoutCallback>(
    () => setActiveLayout(null),
    [setActiveLayout]
  );

  // ------------------------------------
  const createCustomLayout = useCallback<CreateCustomLayoutCallback>(
    (name) => {
      dispatch(
        Actions.createCustomLayout({
          name,
          layout: activeLayout,
        })
      );
    },
    [activeLayout, dispatch]
  );

  const renameCustomLayout = useCallback<RenameCustomLayoutCallback>(
    (currentName, updatedName) => {
      dispatch(Actions.renameCustomLayout({ currentName, updatedName }));
    },
    [dispatch]
  );

  const removeCustomLayout = useCallback<RemoveCustomLayoutCallback>(
    (id) => {
      dispatch(Actions.removeCustomLayout(id));
    },
    [dispatch]
  );
  // ------------------------------------

  // TODO refactor
  // TODO useCallback
  const openLayoutWindow = (windowName: string) => {
    let layoutTree: Layout;

    if (activeLayout) {
      const path = getPathToCorner(activeLayout, Corner.TOP_RIGHT);

      const parent = getNodeAtPath(activeLayout, path) as MosaicParent<string>;

      const destination = getNodeAtPath(
        activeLayout,
        path
      ) as MosaicNode<string>;

      const direction: MosaicDirection = parent
        ? getOtherDirection(parent.direction)
        : 'row';

      let first: MosaicNode<string>;
      let second: MosaicNode<string>;

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
    clearLayout,
    findExistingLayout,
    isEmptyLayout,
    initialLayouts,
    createCustomLayout,
    renameCustomLayout,
    removeCustomLayout,
    openLayoutWindow,
  };
};
