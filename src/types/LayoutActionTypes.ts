import {
  SetActiveLayoutAction,
  CreateCustomLayoutAction,
  RenameCustomLayoutAction,
  RemoveCustomLayoutAction,
} from 'interfaces/LayoutState';

export type LayoutActionTypes =
  | SetActiveLayoutAction
  | CreateCustomLayoutAction
  | RenameCustomLayoutAction
  | RemoveCustomLayoutAction;
