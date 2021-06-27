import { useCallback, useMemo } from 'react';
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

type SelectPlaceCallback = (place: SearchResultItem) => void;
type ItemRendererCallback = (item: SearchResultItem) => JSX.Element;

const SearchForm = () => {
  const { results, error, isLoading, query, setQuery } = useSearchResults();

  const { history, addToHistory, removeFromHistory } = useSearchHistory();

  const { isEmptyLayout } = useLayout();

  const { setCoords } = useMaps();

  const { t } = useTranslation();

  const selectPlace = useCallback<SelectPlaceCallback>(
    (place) => {
      const { lat, lon, display_name, place_id } = place;

      setCoords([parseFloat(lat), parseFloat(lon)]);

      addToHistory({ display_name, place_id, lat, lon, class: place.class });
    },
    [addToHistory, setCoords]
  );

  const itemRenderer = useCallback<ItemRendererCallback>(
    (item) => {
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
    },
    [query, removeFromHistory, selectPlace]
  );

  const searchResultItems = useMemo(() => {
    if (error) {
      return [];
    }

    if (query) {
      return results;
    }

    return history;
  }, [error, history, query, results]);

  const menuItemText = useMemo(() => {
    if (!query) {
      return 'search.emptyQuery';
    }

    if (error) {
      if (error.message?.match(/networkerror/gi)) {
        return 'search.error.network';
      }

      if (error.message === 'Unable to geocode') {
        return 'search.noResults';
      }

      return 'search.error';
    }

    if (isLoading) {
      return 'search.loading';
    }

    return 'search.noResults';
  }, [error, isLoading, query]);

  return (
    <Select
      items={searchResultItems}
      itemRenderer={itemRenderer}
      onItemSelect={selectPlace}
      noResults={<MenuItem text={t(menuItemText)} disabled />}
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
