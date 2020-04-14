import {
  SEARCH_LOADING,
  SEARCH_SUCCESS,
  SEARCH_ERROR,
  SEARCH_HISTORY_ADD,
  SEARCH_HISTORY_REMOVE,
  SEARCH_HISTORY_CLEAR,
} from '../actions';

const initialState: any = {
  loading: false,
  results: [],
  error: null,
  history: [],
};

export const searchReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SEARCH_LOADING:
      return { ...state, loading: true, error: null };

    case SEARCH_SUCCESS:
      return { ...state, results: action.payload, loading: false, error: null };

    case SEARCH_ERROR:
      return { ...state, error: action.payload, results: [], loading: false };

    case SEARCH_HISTORY_ADD: {
      const exists = state.history.find(
        (item: any) => item.place_id === action.payload.place_id
      );

      if (exists) return state;

      return { ...state, history: [action.payload, ...state.history] };
    }

    case SEARCH_HISTORY_REMOVE:
      return {
        ...state,
        history: state.history.filter((item: any) => item !== action.payload),
      };

    case SEARCH_HISTORY_CLEAR:
      return { ...state, history: initialState.history };

    default:
      return state;
  }
};
