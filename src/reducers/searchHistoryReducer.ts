import {
  SEARCH_HISTORY_ADD,
  SEARCH_HISTORY_REMOVE,
  SEARCH_HISTORY_CLEAR,
} from 'actions';

import { SearchHistoryState } from 'interfaces/SearchHistoryState';

import { SearchHistoryActionTypes } from 'types/SearchHistoryActionTypes';

const initialState: SearchHistoryState = {
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
      console.log(state.items, action.payload);

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
