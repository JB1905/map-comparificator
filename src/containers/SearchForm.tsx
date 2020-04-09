import React from 'react';
// import cities from 'all-the-cities';

import { useSearch } from '../hooks/useSearch';

const SearchForm: React.FC = () => {
  const { results, setQuery } = useSearch();

  return (
    <input
      className="bp3-input"
      placeholder="Search..."
      type="text"
      onChange={(e) => setQuery(e.target.value)}
      // onKeyDown={submit}
    />
  );
};

export default SearchForm;
