import {
  SearchHistoryAddAction,
  SearchHistoryRemoveAction,
  SearchHistoryClearAction,
} from 'types/SearchHistoryState';

export type SearchHistoryActionTypes =
  | SearchHistoryAddAction
  | SearchHistoryRemoveAction
  | SearchHistoryClearAction;
