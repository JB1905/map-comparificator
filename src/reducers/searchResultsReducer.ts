import {
  SEARCH_RESULTS_LOADING,
  SEARCH_RESULTS_SUCCESS,
  SEARCH_RESULTS_ERROR,
} from 'actions';

import { SearchResultsState } from 'interfaces/SearchResultsState';

import type { SearchResultsActionTypes } from 'types/SearchResultsActionTypes';

const initialState: SearchResultsState = {
  isLoading: false,
  results: [],
  error: null,
};

export const searchResultsReducer = (
  state = initialState,
  action: SearchResultsActionTypes
) => {
  switch (action.type) {
    case SEARCH_RESULTS_LOADING:
      return { ...state, isLoading: true };

    case SEARCH_RESULTS_SUCCESS:
      return { ...state, isLoading: false, results: action.payload };

    case SEARCH_RESULTS_ERROR:
      return { ...state, isLoading: false, error: action.payload };

    default:
      return state;
  }
};
