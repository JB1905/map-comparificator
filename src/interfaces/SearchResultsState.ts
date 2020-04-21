import {
  SEARCH_RESULTS_LOADING,
  SEARCH_RESULTS_SUCCESS,
  SEARCH_RESULTS_ERROR,
} from 'actions';

import Place from './Place';

export interface SearchResultsState {
  isLoading: boolean;
  results: Place[];
  error: Error | null;
}

export interface SearchResultsLoadingAction {
  type: typeof SEARCH_RESULTS_LOADING;
}

export interface SearchResultsSuccessAction {
  type: typeof SEARCH_RESULTS_SUCCESS;
  payload: Place[];
}

export interface SearchResultsErrorAction {
  type: typeof SEARCH_RESULTS_ERROR;
  payload: Error;
}
