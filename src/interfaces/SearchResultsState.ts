import {
  SEARCH_RESULTS_LOADING,
  SEARCH_RESULTS_SUCCESS,
  SEARCH_RESULTS_ERROR,
} from 'actions';

import { LocationIqResult } from './LocationIq';

export interface SearchResultsState {
  readonly isLoading: boolean;
  readonly results: LocationIqResult[];
  readonly error: Error | null;
}

export interface SearchResultsLoadingAction {
  readonly type: typeof SEARCH_RESULTS_LOADING;
}

export interface SearchResultsSuccessAction {
  readonly type: typeof SEARCH_RESULTS_SUCCESS;
  readonly payload: LocationIqResult[];
}

export interface SearchResultsErrorAction {
  readonly type: typeof SEARCH_RESULTS_ERROR;
  readonly payload: Error;
}
