import { SEARCH_LOADING, SEARCH_SUCCESS, SEARCH_ERROR } from '../actions';

const initialState = {
  loading: false,
  results: [],
  error: null,
};

export const searchResultsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SEARCH_LOADING:
      return { ...state, loading: true };

    case SEARCH_SUCCESS:
      return { ...state, loading: false, results: action.payload };

    case SEARCH_ERROR:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
