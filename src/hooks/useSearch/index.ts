import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useDebounce } from 'use-debounce';

import {
  addSearchHistory,
  removeSearchHistory,
  clearSearchHistory,
  searchLocation,
} from 'actions';

import { RootState } from 'reducers';

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
    if (value) dispatch(searchLocation(value));
  }, [dispatch, value]);

  const addH = (item: SearchHistoryItem) => {
    dispatch(addSearchHistory(item));
  };

  const remH = (id: string) => {
    dispatch(removeSearchHistory(id));
  };

  const clH = () => {
    dispatch(clearSearchHistory());
  };

  return {
    query,
    setQuery,
    isLoading,
    results,
    error,
    history,
    addToHistory: addH, // TODO
    removeFromHistory: remH, // TODO
    clearHistory: clH, // TODO
  };
};
