import {
  SEARCH_HISTORY_ADD,
  SEARCH_HISTORY_REMOVE,
  SEARCH_HISTORY_CLEAR,
} from 'store/actions';

import type { SearchHistoryItem } from 'types/SearchHistoryItem';

export interface SearchHistoryState {
  readonly items: SearchHistoryItem[];
}

export interface SearchHistoryAddAction {
  readonly type: typeof SEARCH_HISTORY_ADD;
  readonly payload: SearchHistoryItem;
}

export interface SearchHistoryRemoveAction {
  readonly type: typeof SEARCH_HISTORY_REMOVE;
  readonly payload: string;
}

export interface SearchHistoryClearAction {
  readonly type: typeof SEARCH_HISTORY_CLEAR;
}
