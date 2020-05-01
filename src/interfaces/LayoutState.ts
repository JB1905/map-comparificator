import {
  SET_ACTIVE_LAYOUT,
  CREATE_CUSTOM_LAYOUT,
  REMOVE_CUSTOM_LAYOUT,
} from 'actions';

import { Layout } from 'types/Layout';

export interface LayoutState {
  activeLayout: Layout;
  customLayouts: {
    name: string;
    layout: Layout;
  }[];
}

export interface SetActiveLayoutAction {
  type: typeof SET_ACTIVE_LAYOUT;
  payload: Layout;
}

export interface CreateCustomLayoutAction {
  type: typeof CREATE_CUSTOM_LAYOUT;
  payload: {
    name: string;
    layout: Layout;
  };
}

export interface RemoveCustomLayoutAction {
  type: typeof REMOVE_CUSTOM_LAYOUT;
  payload: string;
}
