import {
  SET_ACTIVE_LAYOUT,
  CREATE_CUSTOM_LAYOUT,
  RENAME_CUSTOM_LAYOUT,
  REMOVE_CUSTOM_LAYOUT,
} from 'store/actions';

import type { Layout, CustomLayout } from 'types/Layout';
import type { NameUpdate } from 'types/NameUpdate';

export interface LayoutState {
  readonly activeLayout: Layout;
  readonly customLayouts: CustomLayout[];
}

interface SetActiveLayoutAction {
  readonly type: typeof SET_ACTIVE_LAYOUT;
  readonly payload: Layout;
}

interface CreateCustomLayoutAction {
  readonly type: typeof CREATE_CUSTOM_LAYOUT;
  readonly payload: CustomLayout;
}

interface RenameCustomLayoutAction {
  readonly type: typeof RENAME_CUSTOM_LAYOUT;
  readonly payload: NameUpdate;
}

interface RemoveCustomLayoutAction {
  readonly type: typeof REMOVE_CUSTOM_LAYOUT;
  readonly payload: CustomLayout['name'];
}

export type LayoutActionTypes =
  | SetActiveLayoutAction
  | CreateCustomLayoutAction
  | RenameCustomLayoutAction
  | RemoveCustomLayoutAction;
