import {
  SET_ACTIVE_LAYOUT,
  CREATE_CUSTOM_LAYOUT,
  REMOVE_CUSTOM_LAYOUT,
} from 'actions';

import type { Layout } from 'types/Layout';

export interface LayoutState {
  readonly activeLayout: Layout;
  readonly customLayouts: {
    readonly name: string;
    readonly layout: Layout;
  }[];
}

export interface SetActiveLayoutAction {
  readonly type: typeof SET_ACTIVE_LAYOUT;
  readonly payload: Layout;
}

export interface CreateCustomLayoutAction {
  readonly type: typeof CREATE_CUSTOM_LAYOUT;
  readonly payload: {
    readonly name: string;
    readonly layout: Layout;
  };
}

export interface RemoveCustomLayoutAction {
  readonly type: typeof REMOVE_CUSTOM_LAYOUT;
  readonly payload: string;
}
