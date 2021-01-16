import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useDebounce } from 'use-debounce';

import { useTypedSelector } from 'hooks/useTypedSelector';

import * as Actions from 'store/actions';

export const useSearchResults = () => {
  const dispatch = useDispatch();

  const { isLoading, results, error } = useTypedSelector((state) => ({
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
