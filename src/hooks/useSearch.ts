import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useDebounce } from 'use-debounce';

import { search } from '../api/locationIq';

import {
  SEARCH_HISTORY_ADD,
  SEARCH_HISTORY_REMOVE,
  SEARCH_HISTORY_CLEAR,
} from '../actions';

export const useSearch = () => {
  const dispatch = useDispatch();

  const history = useSelector((state: any) => state.search.history);

  const [query, setQuery] = useState('');
  const [value] = useDebounce(query, 1000);

  const [results, setResults] = useState<any>([]);

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

  useEffect(() => {
    if (value) {
      const find = async () => {
        setResults(await search(value));
      };

      find();
    }
  }, [value]);

  // useEffect(() => {
  //   if (results.length > 0) {
  //     dispatch({
  //       type: UPDATE_COORDS,
  //       payload: [parseFloat(results[0].lat), parseFloat(results[0].lon)],
  //     });
  //   }
  // }, [dispatch, results]);

  return {
    query,
    setQuery,
    results,
    history,
    addToHistory,
    removeFromHistory,
    clearHistory,
  };
};
