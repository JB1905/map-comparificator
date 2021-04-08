import {
  SEARCH_RESULTS_LOADING,
  SEARCH_RESULTS_SUCCESS,
  SEARCH_RESULTS_ERROR,
} from 'store/actions';

import { searchResultsReducer } from '.';

describe('searchResultsReducer', () => {
  it('should match initial state values', () => {
    expect(searchResultsReducer(undefined, {} as any)).toEqual({
      isLoading: false,
      results: [],
      error: null,
    });
  });

  // TODO
  it.skip('should', () => {
    expect(
      searchResultsReducer(undefined, {
        type: SEARCH_RESULTS_LOADING,
        // payload:
      })
    ).toEqual({
      // activeTheme:
    });
  });

  // TODO
  it.skip('should', () => {
    expect(
      searchResultsReducer(undefined, {
        type: SEARCH_RESULTS_SUCCESS,
        // payload:
      })
    ).toEqual({
      // activeTheme:
    });
  });

  // TODO
  it.skip('should', () => {
    expect(
      searchResultsReducer(undefined, {
        type: SEARCH_RESULTS_ERROR,
        // payload:
      })
    ).toEqual({
      // activeTheme:
    });
  });
});
