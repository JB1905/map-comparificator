import {
  SearchResultsLoadingAction,
  SearchResultsSuccessAction,
  SearchResultsErrorAction,
} from 'types/SearchResultsState';

export type SearchResultsActionTypes =
  | SearchResultsLoadingAction
  | SearchResultsSuccessAction
  | SearchResultsErrorAction;
