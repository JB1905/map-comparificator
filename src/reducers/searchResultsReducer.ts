import {
  SEARCH_RESULTS_LOADING,
  SEARCH_RESULTS_SUCCESS,
  SEARCH_RESULTS_ERROR,
} from '../actions';

import Place from '../interfaces/Place';

interface InitialState {
  loading: boolean;
  results: Place[];
  error: Error | null;
}

interface SearchResultsLoadingAction {
  type: typeof SEARCH_RESULTS_LOADING;
}

interface SearchResultsSuccessAction {
  type: typeof SEARCH_RESULTS_SUCCESS;
  payload: Place[];
}

interface SearchResultsErrorAction {
  type: typeof SEARCH_RESULTS_ERROR;
  payload: Error;
}

export type SearchResultsActionTypes =
  | SearchResultsLoadingAction
  | SearchResultsSuccessAction
  | SearchResultsErrorAction;

const initialState: InitialState = {
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
