import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useDebounce } from 'use-debounce';

import * as Actions from 'store/actions';

import { RootState } from 'store/reducers';

export const useSearchResults = () => {
  const dispatch = useDispatch();

  const { isLoading, results, error } = useSelector((state: RootState) => ({
    isLoading: state.searchResults.isLoading,
    results: state.searchResults.results,
    error: state.searchResults.error,
  }));

  const [query, setQuery] = useState('');

  const [value] = useDebounce(query, 1000);

  useEffect(() => {
    if (value) dispatch(Actions.searchLocation(value));
  }, [dispatch, value]);

  return {
    query,
    setQuery,
    isLoading,
    results,
    error,
  };
};
