import * as Actions from '.';

describe('searchHistoryActions', () => {
  it('should create action addSearchHistory', () => {
    const expectedAction = {
      type: Actions.SEARCH_HISTORY_ADD,
    };

    expect(Actions.addSearchHistory()).toEqual(expectedAction);
  });

  it('should create action clearSearchHistory', () => {
    const expectedAction = {
      type: Actions.SEARCH_HISTORY_CLEAR,
    };

    expect(Actions.clearSearchHistory()).toEqual(expectedAction);
  });

  it('should create action removeSearchHistory', () => {
    const expectedAction = {
      type: Actions.SEARCH_HISTORY_REMOVE,
    };

    expect(Actions.removeSearchHistory()).toEqual(expectedAction);
  });
});
