import {
  SetActiveLayoutAction,
  CreateLayoutAction,
  RemoveLayoutAction,
} from 'interfaces/LayoutState';

export type LayoutActionTypes =
  | SetActiveLayoutAction
  | CreateLayoutAction
  | RemoveLayoutAction;
