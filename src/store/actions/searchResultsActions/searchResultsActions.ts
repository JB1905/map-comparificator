import { Dispatch } from 'redux';

import { LocationIqResult, LocationIqError } from 'types/LocationIq';

import type { SearchResultsActionTypes } from 'types/SearchResultsActionTypes';

export const SEARCH_RESULTS_LOADING = 'SEARCH_RESULTS_LOADING';
export const SEARCH_RESULTS_SUCCESS = 'SEARCH_RESULTS_SUCCESS';
export const SEARCH_RESULTS_ERROR = 'SEARCH_RESULTS_ERROR';

const searchLocationFetchPending = (): SearchResultsActionTypes => ({
  type: SEARCH_RESULTS_LOADING,
});

const searchLocationFetchSuccess = (
  data: LocationIqResult[]
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
      `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_IQ_TOKEN}&q=${query}&format=json`
    );

    const data: LocationIqResult[] | LocationIqError = await res.json();

    if (Array.isArray(data)) {
      dispatch(searchLocationFetchSuccess(data));
    } else {
      throw new Error(data.error);
    }
  } catch (err) {
    dispatch(searchLocationFetchError(err));
  }
};
