import React from 'react';
import { MenuItem, InputGroup } from '@blueprintjs/core';
import { Select } from '@blueprintjs/select';

import { useSearch } from 'hooks/useSearch';
import { useLayout } from 'hooks/useLayout';
import { useMaps } from 'hooks/useMaps';

import { locationIcons } from 'constants/locationIcons';

import Place from 'interfaces/Place';

import { SearchHistoryItem } from 'types/SearchHistoryItem';

import './SearchForm.scss';

const SearchForm: React.FC = () => {
  const { history, results, query, setQuery, addToHistory } = useSearch();

  const { isEmptyLayout } = useLayout();

  const { setCoords } = useMaps();

  const selectPlace = (place: Place | SearchHistoryItem) => {
    const { lat, lon, display_name, place_id } = place;

    setCoords([parseFloat(lat), parseFloat(lon)]);

    addToHistory({ display_name, place_id, lat, lon, class: place.class });
  };

  const itemRenderer = (item: Place | SearchHistoryItem) => (
    <MenuItem
      className="search-form-hints"
      text={item.display_name}
      icon={locationIcons[item.class] ?? 'map-marker'}
      onClick={() => selectPlace(item)}
      key={item.place_id}
    />
  );

  return (
    <Select
      items={query ? results : history}
      itemRenderer={itemRenderer}
      onItemSelect={selectPlace}
      noResults={<MenuItem text="No results found" disabled />}
      popoverProps={{ minimal: true }}
      filterable={false}
    >
      <InputGroup
        type="search"
        placeholder="Search..."
        aria-label="Search"
        disabled={isEmptyLayout}
        leftIcon="search"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setQuery(e.target.value)
        }
      />
    </Select>
  );
};

export default SearchForm;
