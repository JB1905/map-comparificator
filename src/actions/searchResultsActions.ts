import { Dispatch } from 'redux';

import { LocationIqToken } from '../config';

import { SearchResultsActionTypes } from '../types/SearchResultsActionTypes';

import Place from '../interfaces/Place';

export const SEARCH_RESULTS_LOADING = 'SEARCH_RESULTS_LOADING';
export const SEARCH_RESULTS_SUCCESS = 'SEARCH_RESULTS_SUCCESS';
export const SEARCH_RESULTS_ERROR = 'SEARCH_RESULTS_ERROR';

const searchLocationFetchPending = (): SearchResultsActionTypes => ({
  type: SEARCH_RESULTS_LOADING,
});

const searchLocationFetchSuccess = (
  data: Place[]
): SearchResultsActionTypes => ({
  type: SEARCH_RESULTS_SUCCESS,
  payload: data,
});

const searchLocationFetchError = (err: Error): SearchResultsActionTypes => ({
  type: SEARCH_RESULTS_ERROR,
  payload: err,
});

export const searchLocation = (query: string) => async (dispatch: Dispatch) => {
  dispatch(searchLocationFetchPending());

  try {
    const res = await fetch(
      `https://eu1.locationiq.com/v1/search.php?key=${LocationIqToken}&q=${query}&format=json`
    );

    const data = await res.json();

    dispatch(searchLocationFetchSuccess(data));
  } catch (err) {
    dispatch(searchLocationFetchError(err));
  }
};
