import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useDebounce } from 'use-debounce';

import {
  SEARCH_HISTORY_ADD,
  SEARCH_HISTORY_REMOVE,
  SEARCH_HISTORY_CLEAR,
  searchLocation,
} from '../actions';

export const useSearch = () => {
  const dispatch = useDispatch();

  const [query, setQuery] = useState('');

  const [value] = useDebounce(query, 1000);

  const { loading, results, error, history } = useSelector((state: any) => ({
    loading: state.searchResults.loading,
    results: state.searchResults.results,
    error: state.searchResults.error,
    history: state.searchHistory.items.slice(0, 10),
  }));

  useEffect(() => {
    if (value) dispatch(searchLocation(value));
  }, [dispatch, value]);

  const addToHistory = (item: any) => {
    dispatch({
      type: SEARCH_HISTORY_ADD,
      payload: item,
    });
  };

  const removeFromHistory = (item: any) => {
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
    loading,
    results,
    error,
    history,
    addToHistory,
    removeFromHistory,
    clearHistory,
  };
};
