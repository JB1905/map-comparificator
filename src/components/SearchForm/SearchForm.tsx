import * as React from 'react';
import { MenuItem, InputGroup, Button } from '@blueprintjs/core';
import { Select } from '@blueprintjs/select';
import { useTranslation } from 'react-i18next';

import { useSearch } from 'hooks/useSearch';
import { useLayout } from 'hooks/useLayout';
import { useMaps } from 'hooks/useMaps';

import { locationIcons } from 'constants/locationIcons';

import { LocationIqResult } from 'interfaces/LocationIq';

import type { SearchHistoryItem } from 'types/SearchHistoryItem';

import './SearchForm.scss';

const SearchForm = () => {
  const {
    history,
    results,
    error,
    query,
    setQuery,
    addToHistory,
    removeFromHistory,
  } = useSearch();

  const { isEmptyLayout } = useLayout();

  const { setCoords } = useMaps();

  const { t } = useTranslation();

  const selectPlace = (place: LocationIqResult | SearchHistoryItem) => {
    const { lat, lon, display_name, place_id } = place;

    setCoords([parseFloat(lat), parseFloat(lon)]);

    addToHistory({ display_name, place_id, lat, lon, class: place.class });
  };

  const itemRenderer = (item: LocationIqResult | SearchHistoryItem) => (
    <MenuItem
      text={item.display_name}
      icon={locationIcons[item.class] ?? 'map-marker'}
      onClick={() => selectPlace(item)}
      key={item.place_id}
      labelElement={
        !query && (
          <Button
            icon="trash"
            onClick={(e: React.MouseEvent<HTMLElement, MouseEvent>) => {
              e.stopPropagation();

              removeFromHistory(item.place_id);
            }}
            small
          />
        )
      }
    />
  );

  return (
    <Select
      items={error ? [] : query ? results : history}
      itemRenderer={itemRenderer}
      onItemSelect={selectPlace}
      noResults={<MenuItem text={t('search.noResults')} disabled />}
      popoverProps={{ minimal: true }}
      filterable={false}
    >
      <InputGroup
        type="search"
        placeholder={t('search.placeholder')}
        aria-label={t('search.label')}
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
