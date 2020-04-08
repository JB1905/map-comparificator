import { useState } from 'react';

export const useSearch = (data: any[]) => {
  const [results, setResults] = useState(data);

  const findHints = (query: string) => {
    setResults(data.filter((item) => item !== query));
  };

  return { findHints, results };
};
