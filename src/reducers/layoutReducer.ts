import { MosaicParent } from 'react-mosaic-component';

import {
  SET_LAYOUT,
  CREATE_LAYOUT,
  REMOVE_LAYOUT,
} from '../actions/layoutActions';

import { gridLayout } from '../layouts';

export type Layout = string | MosaicParent<string> | null;

export interface LayoutState {
  activeLayout: Layout;
  customLayouts: {
    name: string;
    layout: Layout;
  }[];
}

interface SetLayoutAction {
  type: typeof SET_LAYOUT;
  payload: Layout;
}

interface CreateLayoutAction {
  type: typeof CREATE_LAYOUT;
  payload: {
    name: string;
    layout: Layout;
  };
}

interface RemoveLayoutAction {
  type: typeof REMOVE_LAYOUT;
}

type LayoutActionTypes =
  | SetLayoutAction
  | CreateLayoutAction
  | RemoveLayoutAction;

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
    default:
      return state;
  }
};
