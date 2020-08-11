export const SEARCH_HISTORY_ADD = 'SEARCH_HISTORY_ADD';
export const SEARCH_HISTORY_REMOVE = 'SEARCH_HISTORY_REMOVE';
export const SEARCH_HISTORY_CLEAR = 'SEARCH_HISTORY_CLEAR';

export const addSearchHistory = () => ({
  type: SEARCH_HISTORY_ADD,
});

export const removeSearchHistory = () => ({
  type: SEARCH_HISTORY_REMOVE,
});

export const clearSearchHistory = () => ({
  type: SEARCH_HISTORY_CLEAR,
});
