import { useDispatch } from 'react-redux';

import { useTypedSelector } from 'hooks/useTypedSelector';

import * as Actions from 'store/actions';

import { LocationIqResult } from 'interfaces/LocationIq';

import type { SearchHistoryItem } from 'types/SearchHistoryItem';

const HISTORY_SIZE_LIMIT = 10;

export const useSearchHistory = () => {
  const dispatch = useDispatch();

  const history = useTypedSelector((state) =>
    state.searchHistory.items.slice(0, HISTORY_SIZE_LIMIT)
  );

  const addToHistory = (item: SearchHistoryItem) => {
    dispatch(Actions.addSearchHistory(item));
  };

  const removeFromHistory = (id: LocationIqResult['place_id']) => {
    dispatch(Actions.removeSearchHistory(id));
  };

  const clearHistory = () => {
    dispatch(Actions.clearSearchHistory());
  };

  return {
    history,
    addToHistory,
    removeFromHistory,
    clearHistory,
  };
};
