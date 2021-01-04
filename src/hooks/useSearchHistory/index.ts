import { useDispatch, useSelector } from 'react-redux';

import * as Actions from 'store/actions';

import { RootState } from 'store/reducers';

import type { SearchHistoryItem } from 'types/SearchHistoryItem';

export const useSearchHistory = () => {
  const dispatch = useDispatch();

  const history = useSelector((state: RootState) =>
    state.searchHistory.items.slice(0, 10)
  );

  const addToHistory = (item: SearchHistoryItem) => {
    dispatch(Actions.addSearchHistory(item));
  };

  const removeFromHistory = (id: string) => {
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
