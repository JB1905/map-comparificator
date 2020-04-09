import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useDebounce } from 'use-debounce';

import { search } from '../api/locationIq';
import { UPDATE_COORDS } from '../actions';

export const useSearch = () => {
  const dispatch = useDispatch();

  const [query, setQuery] = useState('');
  const [value] = useDebounce(query, 1000);

  const [results, setResults] = useState<any>([]);

  useEffect(() => {
    const find = async () => {
      setResults(await search(value));
    };

    find();
  }, [value]);

  useEffect(() => {
    if (results.length > 0) {
      dispatch({
        type: UPDATE_COORDS,
        payload: [results[0].lat, results[0].lon],
      });
    }
  }, [dispatch, results]);

  return { query, setQuery, results };
};
