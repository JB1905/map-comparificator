import React from 'react';
import { Select } from '@blueprintjs/select';
import { MenuItem, Button } from '@blueprintjs/core';

import { useSearch } from '../hooks/useSearch';
import { useLayout } from '../hooks/useLayout';
import { useGeolocation } from '../hooks/useGeolocation';

const SearchForm: React.FC = () => {
  const {
    history,
    results,
    query,
    setQuery,
    addToHistory,
    removeFromHistory,
    clearHistory,
  } = useSearch();

  console.log(results);

  const { isEmptyLayout } = useLayout();

  const { setCoords } = useGeolocation();

  const selectPlace = (place: any) => {
    const { lat, lon, display_name, place_id } = place;

    setCoords([parseFloat(lat), parseFloat(lon)]);

    addToHistory({ display_name, lat, lon, place_id });
  };

  return (
    <Select
      items={query ? results : history}
      filterable={false}
      itemRenderer={(item: any) => (
        <>
          <MenuItem
            style={{ flex: 1 }}
            text={item.display_name}
            onClick={() => selectPlace(item)}
          />

          {/* {!query && (
            <Button
              onClick={() => removeFromHistory(item)}
              icon="trash"
              minimal
            />
          )} */}
        </>
      )}
      onItemSelect={() => console.log('null')}
      popoverProps={{ minimal: true }}
      // createNewItemRenderer={() => <p>aaa</p>}
      // noResults={<p>aaa</p>}
    >
      <div className="bp3-input-group">
        <span className="bp3-icon bp3-icon-search" />

        <input
          className="bp3-input"
          type="search"
          placeholder="Search..."
          disabled={isEmptyLayout}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
    </Select>
  );
};

export default SearchForm;
