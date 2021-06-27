import type { SearchHistoryItem } from 'types/SearchHistoryItem';

export const SEARCH_HISTORY_ADD = 'SEARCH_HISTORY_ADD';
export const SEARCH_HISTORY_REMOVE = 'SEARCH_HISTORY_REMOVE';
export const SEARCH_HISTORY_CLEAR = 'SEARCH_HISTORY_CLEAR';

export const addSearchHistory = (payload: SearchHistoryItem) => ({
  type: SEARCH_HISTORY_ADD,
  payload,
});

export const removeSearchHistory = (payload: string) => ({
  type: SEARCH_HISTORY_REMOVE,
  payload,
});

export const clearSearchHistory = () => ({
  type: SEARCH_HISTORY_CLEAR,
});
