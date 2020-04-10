import React from 'react';

import { useSearch } from '../hooks/useSearch';
import { useLayout } from '../hooks/useLayout';

const SearchForm: React.FC = () => {
  const { results, setQuery } = useSearch();

  const { layout } = useLayout();

  // console.log(results);

  return (
    <div className="bp3-input-group">
      <span className="bp3-icon bp3-icon-search" />

      <input
        className="bp3-input"
        type="search"
        placeholder="Search..."
        dir="auto"
        disabled={layout === null}
        onChange={(e) => setQuery(e.target.value)}
        // onKeyDown={submit}
      />
    </div>
  );
};

export default SearchForm;
