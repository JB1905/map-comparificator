import {
  SetLayoutAction,
  CreateLayoutAction,
  RemoveLayoutAction,
} from 'interfaces/LayoutState';

export type LayoutActionTypes =
  | SetLayoutAction
  | CreateLayoutAction
  | RemoveLayoutAction;
