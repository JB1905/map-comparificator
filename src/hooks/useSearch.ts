import { useState, useEffect } from 'react';

export const useSearch = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  // useEffect(() => {
  //   console.log(data);

  //   // setResults(data.filter((item) => item !== query));
  // }, [data, query]);

  // const findHints = (query: string) => {};

  return { query, setQuery, results };
};
