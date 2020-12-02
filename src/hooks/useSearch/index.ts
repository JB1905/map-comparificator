import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useDebounce } from 'use-debounce';

import * as Actions from 'store/actions';

import { RootState } from 'store/reducers';

import type { SearchHistoryItem } from 'types/SearchHistoryItem';

export const useSearch = () => {
  const dispatch = useDispatch();

  const { isLoading, results, error, history } = useSelector(
    (state: RootState) => ({
      isLoading: state.searchResults.isLoading,
      results: state.searchResults.results,
      error: state.searchResults.error,
      history: state.searchHistory.items.slice(0, 10),
    })
  );

  const [query, setQuery] = useState('');

  const [value] = useDebounce(query, 1000);

  useEffect(() => {
    if (value) dispatch(Actions.searchLocation(value));
  }, [dispatch, value]);

  const addToHistory = (item: SearchHistoryItem) => {
    dispatch(Actions.addSearchHistory(item));
  };

  const removeFromHistory = (id: string) => {
    dispatch(Actions.removeSearchHistory(id));
  };

  const clearHistory = () => {
    dispatch(Actions.clearSearchHistory());
  };

  return {
    query,
    setQuery,
    isLoading,
    results,
    error,
    history,
    addToHistory,
    removeFromHistory,
    clearHistory,
  };
};
