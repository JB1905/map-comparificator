import * as React from 'react';
import { MenuItem, InputGroup, Button } from '@blueprintjs/core';
import { Select } from '@blueprintjs/select';
import { useTranslation } from 'react-i18next';

import { useSearchResults } from 'hooks/useSearchResults';
import { useSearchHistory } from 'hooks/useSearchHistory';
import { useLayout } from 'hooks/useLayout';
import { useMaps } from 'hooks/useMaps';

import { locationIcons } from 'constants/locationIcons';

import { LocationIqResult } from 'interfaces/LocationIq';

import type { SearchHistoryItem } from 'types/SearchHistoryItem';

import './SearchForm.scss';

type SearchResultItem = LocationIqResult | SearchHistoryItem;

const SearchForm = () => {
  const { results, error, isLoading, query, setQuery } = useSearchResults();

  const { history, addToHistory, removeFromHistory } = useSearchHistory();

  const { isEmptyLayout } = useLayout();

  const { setCoords } = useMaps();

  const { t } = useTranslation();

  const selectPlace = (place: SearchResultItem) => {
    const { lat, lon, display_name, place_id } = place;

    setCoords([parseFloat(lat), parseFloat(lon)]);

    addToHistory({ display_name, place_id, lat, lon, class: place.class });
  };

  const itemRenderer = (item: SearchResultItem) => {
    const handleRemoveFromHistory = (
      e: React.MouseEvent<HTMLElement, MouseEvent>
    ) => {
      e.stopPropagation();

      removeFromHistory(item.place_id);
    };

    return (
      <MenuItem
        text={item.display_name}
        icon={locationIcons[item.class] ?? 'map-marker'}
        onClick={() => selectPlace(item)}
        key={item.place_id}
        labelElement={
          !query && (
            <Button icon="trash" onClick={handleRemoveFromHistory} small />
          )
        }
      />
    );
  };

  const prepareItems = () => {
    if (error) {
      return [];
    }

    if (query) {
      return results;
    }

    return history;
  };

  const prepareMenuItemText = () => {
    if (error) {
      return 'search.error';
    }

    if (isLoading) {
      return 'search.loading';
    }

    return 'search.noResults';
  };

  return (
    <Select
      items={prepareItems()}
      itemRenderer={itemRenderer}
      onItemSelect={selectPlace}
      noResults={<MenuItem text={t(prepareMenuItemText())} disabled />}
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
