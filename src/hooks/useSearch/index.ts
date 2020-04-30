import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useDebounce } from 'use-debounce';

import {
  SEARCH_HISTORY_ADD,
  SEARCH_HISTORY_REMOVE,
  SEARCH_HISTORY_CLEAR,
  searchLocation,
} from 'actions';

import { RootState } from 'reducers';

import { SearchHistoryItem } from 'types/SearchHistoryItem';

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

  const addToHistory = (item: SearchHistoryItem) => {
    dispatch({
      type: SEARCH_HISTORY_ADD,
      payload: item,
    });
  };

  const removeFromHistory = (item: SearchHistoryItem) => {
    dispatch({
      type: SEARCH_HISTORY_REMOVE,
      payload: item,
    });
  };

  const clearHistory = () => {
    dispatch({
      type: SEARCH_HISTORY_CLEAR,
    });
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
