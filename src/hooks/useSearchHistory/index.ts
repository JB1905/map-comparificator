import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { useTypedSelector } from 'hooks/useTypedSelector';

import * as Actions from 'store/actions';

import { LocationIqResult } from 'interfaces/LocationIq';

import type { SearchHistoryItem } from 'types/SearchHistoryItem';

const HISTORY_SIZE_LIMIT = 10;

type AddToHistoryCallback = (item: SearchHistoryItem) => void;
type RemoveFromHistoryCallback = (id: LocationIqResult['place_id']) => void;

export const useSearchHistory = () => {
  const dispatch = useDispatch();

  const history = useTypedSelector((state) =>
    state.searchHistory.items.slice(0, HISTORY_SIZE_LIMIT)
  );

  const addToHistory = useCallback<AddToHistoryCallback>(
    (item) => {
      dispatch(Actions.addSearchHistory(item));
    },
    [dispatch]
  );

  const removeFromHistory = useCallback<RemoveFromHistoryCallback>(
    (id) => {
      dispatch(Actions.removeSearchHistory(id));
    },
    [dispatch]
  );

  const clearHistory = useCallback(() => {
    dispatch(Actions.clearSearchHistory());
  }, [dispatch]);

  return {
    history,
    addToHistory,
    removeFromHistory,
    clearHistory,
  };
};
