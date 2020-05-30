import {
  SET_ACTIVE_LAYOUT,
  CREATE_CUSTOM_LAYOUT,
  REMOVE_CUSTOM_LAYOUT,
} from 'actions';

import type { Layout, CustomLayout } from 'types/Layout';

export interface LayoutState {
  readonly activeLayout: Layout;
  readonly customLayouts: CustomLayout[];
}

export interface SetActiveLayoutAction {
  readonly type: typeof SET_ACTIVE_LAYOUT;
  readonly payload: Layout;
}

export interface CreateCustomLayoutAction {
  readonly type: typeof CREATE_CUSTOM_LAYOUT;
  readonly payload: CustomLayout;
}

export interface RemoveCustomLayoutAction {
  readonly type: typeof REMOVE_CUSTOM_LAYOUT;
  readonly payload: string;
}
