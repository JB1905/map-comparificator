import {
  SET_LAYOUT,
  CREATE_LAYOUT,
  REMOVE_LAYOUT,
} from 'actions/layoutActions';

import { gridLayout } from 'constants/layouts';

import { LayoutState } from 'interfaces/LayoutState';

import { LayoutActionTypes } from 'types/LayoutActionTypes';

const initialState: LayoutState = {
  activeLayout: gridLayout,
  customLayouts: [],
};

export const layoutReducer = (
  state = initialState,
  action: LayoutActionTypes
) => {
  switch (action.type) {
    case SET_LAYOUT:
      return { ...state, activeLayout: action.payload };

    case CREATE_LAYOUT:
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

    case REMOVE_LAYOUT:
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
