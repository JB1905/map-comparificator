import {
  SEARCH_RESULTS_LOADING,
  SEARCH_RESULTS_SUCCESS,
  SEARCH_RESULTS_ERROR,
} from '../actions';

import { SearchResultsState } from '../interfaces/SearchResultsState';

import { SearchResultsActionTypes } from '../types/SearchResultsActionTypes';

const initialState: SearchResultsState = {
  loading: false,
  results: [],
  error: null,
};

export const searchResultsReducer = (
  state = initialState,
  action: SearchResultsActionTypes
) => {
  switch (action.type) {
    case SEARCH_RESULTS_LOADING:
      return { ...state, loading: true };

    case SEARCH_RESULTS_SUCCESS:
      return { ...state, loading: false, results: action.payload };

    case SEARCH_RESULTS_ERROR:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
