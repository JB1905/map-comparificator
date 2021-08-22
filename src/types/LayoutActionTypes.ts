import {
  SetActiveLayoutAction,
  CreateCustomLayoutAction,
  RenameCustomLayoutAction,
  RemoveCustomLayoutAction,
} from 'types/LayoutState';

export type LayoutActionTypes =
  | SetActiveLayoutAction
  | CreateCustomLayoutAction
  | RenameCustomLayoutAction
  | RemoveCustomLayoutAction;
