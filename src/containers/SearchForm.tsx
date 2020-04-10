import React from 'react';
import { Menu, MenuItem } from '@blueprintjs/core';

import { useSearch } from '../hooks/useSearch';
import { useGeolocation } from '../hooks/useGeolocation';
import { useLayout } from '../hooks/useLayout';

import { compareObjects } from '../helpers/compareObjects';

const SearchForm: React.FC = () => {
  const { results, setQuery, addToHistory } = useSearch();

  const { setCoords } = useGeolocation();

  const { layout } = useLayout();

  console.log(results);

  // const find = (coords)

  const selectPlace = (place: any) => {
    const { lat, lon, display_name } = place;

    setCoords([parseFloat(lat), parseFloat(lon)]);

    addToHistory(display_name);
  };

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

      <Menu>
        {results.map((result: any) => (
          <MenuItem
            text={result.display_name}
            key={result.place_id}
            // active={compareObjects(layout, pattern)}
            onClick={() => selectPlace(result)}
          />
        ))}
      </Menu>
    </div>
  );
};

export default SearchForm;
