import {
  SEARCH_HISTORY_ADD,
  SEARCH_HISTORY_REMOVE,
  SEARCH_HISTORY_CLEAR,
} from '../actions';

const initialState = {
  items: [],
};

export const searchHistoryReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SEARCH_HISTORY_ADD: {
      const exists = state.items.find(
        (item: any) => item.place_id === action.payload.place_id
      );

      if (exists) return state;

      return { ...state, items: [action.payload, ...state.items] };
    }

    case SEARCH_HISTORY_REMOVE:
      return {
        ...state,
        items: state.items.filter((item: any) => item !== action.payload),
      };

    case SEARCH_HISTORY_CLEAR:
      return { ...state, items: initialState.items };

    default:
      return state;
  }
};
