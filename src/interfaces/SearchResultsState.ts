import {
  SEARCH_RESULTS_LOADING,
  SEARCH_RESULTS_SUCCESS,
  SEARCH_RESULTS_ERROR,
} from 'actions';

import { LocationIqResult } from './LocationIq';

export interface SearchResultsState {
  isLoading: boolean;
  results: LocationIqResult[];
  error: Error | null;
}

export interface SearchResultsLoadingAction {
  type: typeof SEARCH_RESULTS_LOADING;
}

export interface SearchResultsSuccessAction {
  type: typeof SEARCH_RESULTS_SUCCESS;
  payload: LocationIqResult[];
}

export interface SearchResultsErrorAction {
  type: typeof SEARCH_RESULTS_ERROR;
  payload: Error;
}
