import { SET_LAYOUT, CREATE_LAYOUT, REMOVE_LAYOUT } from 'actions';

import { Layout } from 'types/Layout';

export interface LayoutState {
  activeLayout: Layout;
  customLayouts: {
    name: string;
    layout: Layout;
  }[];
}

export interface SetLayoutAction {
  type: typeof SET_LAYOUT;
  payload: Layout;
}

export interface CreateLayoutAction {
  type: typeof CREATE_LAYOUT;
  payload: {
    name: string;
    layout: Layout;
  };
}

export interface RemoveLayoutAction {
  type: typeof REMOVE_LAYOUT;
  payload: string;
}
