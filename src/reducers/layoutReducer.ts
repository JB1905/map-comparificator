import {
  SET_ACTIVE_LAYOUT,
  CREATE_CUSTOM_LAYOUT,
  RENAME_CUSTOM_LAYOUT,
  REMOVE_CUSTOM_LAYOUT,
} from 'actions/layoutActions';

import { gridLayout } from 'constants/layouts';

import { LayoutState } from 'interfaces/LayoutState';

import type { LayoutActionTypes } from 'types/LayoutActionTypes';

const initialState: LayoutState = {
  activeLayout: gridLayout,
  customLayouts: [],
};

export const layoutReducer = (
  state = initialState,
  action: LayoutActionTypes
) => {
  switch (action.type) {
    case SET_ACTIVE_LAYOUT:
      return { ...state, activeLayout: action.payload };

    case CREATE_CUSTOM_LAYOUT:
      return {
        ...state,
        customLayouts: [
          ...state.customLayouts,
          {
            name: action.payload.name,
            layout: action.payload.layout,
          },
        ],
      };

    case RENAME_CUSTOM_LAYOUT:
      return {
        ...state,
        customLayouts: state.customLayouts.map((layout) => {
          if (layout.name === action.payload.currentId) {
            return {
              ...layout,
              name: action.payload.updatedId,
            };
          }

          return layout;
        }),
      };

    case REMOVE_CUSTOM_LAYOUT:
      return {
        ...state,
        customLayouts: state.customLayouts.filter(
          (customLayout) => customLayout.name !== action.payload
        ),
      };

    default:
      return state;
  }
};
