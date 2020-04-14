import React from 'react';
import { Select } from '@blueprintjs/select';
import { MenuItem, Button } from '@blueprintjs/core';

import { useSearch } from '../../hooks/useSearch';
import { useLayout } from '../../hooks/useLayout';
import { useGeolocation } from '../../hooks/useGeolocation';

import { locationIcons } from '../../constants/locationIcons';

import './SearchForm.scss';

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

  // console.log(results);

  const { isEmptyLayout } = useLayout();

  const { setCoords } = useGeolocation();

  const selectPlace = (place: any) => {
    const { lat, lon, display_name, place_id } = place;

    setCoords([parseFloat(lat), parseFloat(lon)]);

    addToHistory({ display_name, lat, lon, place_id, class: place.class });
  };

  return (
    <Select
      items={query ? results : history}
      filterable={false}
      itemRenderer={(item: any) => (
        <>
          <MenuItem
            className="search-form-hints"
            text={item.display_name}
            icon={locationIcons[item.class] ?? 'map-marker'}
            onClick={() => selectPlace(item)}
            key={item.place_id}
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
      onItemSelect={selectPlace}
      popoverProps={{ minimal: true }}
      noResults={<p>Results not found</p>}
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
