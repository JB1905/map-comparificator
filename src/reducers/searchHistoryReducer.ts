import {
  SEARCH_HISTORY_ADD,
  SEARCH_HISTORY_REMOVE,
  SEARCH_HISTORY_CLEAR,
} from '../actions';

import { SearchHistoryItem } from '../types/SearchHistoryItem';

interface InitialState {
  items: SearchHistoryItem[];
}

interface SearchHistoryAddAction {
  type: typeof SEARCH_HISTORY_ADD;
  payload: SearchHistoryItem;
}

interface SearchHistoryRemoveAction {
  type: typeof SEARCH_HISTORY_REMOVE;
  payload: string;
}

interface SearchHistoryClearAction {
  type: typeof SEARCH_HISTORY_CLEAR;
}

type SearchHistoryActionTypes =
  | SearchHistoryAddAction
  | SearchHistoryRemoveAction
  | SearchHistoryClearAction;

const initialState: InitialState = {
  items: [],
};

export const searchHistoryReducer = (
  state = initialState,
  action: SearchHistoryActionTypes
) => {
  switch (action.type) {
    case SEARCH_HISTORY_ADD: {
      const exists = state.items.find(
        (item) => item.place_id === action.payload.place_id
      );

      if (exists) return state;

      return { ...state, items: [action.payload, ...state.items] };
    }

    case SEARCH_HISTORY_REMOVE:
      return {
        ...state,
        items: state.items.filter((item) => item.place_id !== action.payload),
      };

    case SEARCH_HISTORY_CLEAR:
      return { ...state, items: initialState.items };

    default:
      return state;
  }
};
