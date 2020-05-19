import {
  SEARCH_HISTORY_ADD,
  SEARCH_HISTORY_REMOVE,
  SEARCH_HISTORY_CLEAR,
} from 'actions';

import type { SearchHistoryItem } from 'types/SearchHistoryItem';

export interface SearchHistoryState {
  items: SearchHistoryItem[];
}

export interface SearchHistoryAddAction {
  type: typeof SEARCH_HISTORY_ADD;
  payload: SearchHistoryItem;
}

export interface SearchHistoryRemoveAction {
  type: typeof SEARCH_HISTORY_REMOVE;
  payload: string;
}

export interface SearchHistoryClearAction {
  type: typeof SEARCH_HISTORY_CLEAR;
}
