import {
  SetActiveLayoutAction,
  CreateCustomLayoutAction,
  RemoveCustomLayoutAction,
} from 'interfaces/LayoutState';

export type LayoutActionTypes =
  | SetActiveLayoutAction
  | CreateCustomLayoutAction
  | RemoveCustomLayoutAction;
