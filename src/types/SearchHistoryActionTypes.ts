import {
  SearchHistoryAddAction,
  SearchHistoryRemoveAction,
  SearchHistoryClearAction,
} from 'interfaces/SearchHistoryState';

export type SearchHistoryActionTypes =
  | SearchHistoryAddAction
  | SearchHistoryRemoveAction
  | SearchHistoryClearAction;
