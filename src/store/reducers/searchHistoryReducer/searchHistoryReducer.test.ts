import {
  SEARCH_HISTORY_ADD,
  SEARCH_HISTORY_REMOVE,
  SEARCH_HISTORY_CLEAR,
} from 'store/actions';

import { searchHistoryReducer } from '.';

describe('searchHistoryReducer', () => {
  it('should match initial state values', () => {
    expect(searchHistoryReducer(undefined, {} as any)).toEqual({
      items: [],
    });
  });

  it.skip('should', () => {
    expect(
      searchHistoryReducer(undefined, {
        type: SEARCH_HISTORY_ADD,
        // payload:
      })
    ).toEqual({
      // activeTheme:
    });
  });

  it.skip('should', () => {
    expect(
      searchHistoryReducer(undefined, {
        type: SEARCH_HISTORY_REMOVE,
        // payload:
      })
    ).toEqual({
      // activeTheme:
    });
  });

  it.skip('should', () => {
    expect(
      searchHistoryReducer(undefined, {
        type: SEARCH_HISTORY_CLEAR,
        // payload:
      })
    ).toEqual({
      // activeTheme:
    });
  });
});
