import {
  SearchResultsLoadingAction,
  SearchResultsSuccessAction,
  SearchResultsErrorAction,
} from 'interfaces/SearchResultsState';

export type SearchResultsActionTypes =
  | SearchResultsLoadingAction
  | SearchResultsSuccessAction
  | SearchResultsErrorAction;
