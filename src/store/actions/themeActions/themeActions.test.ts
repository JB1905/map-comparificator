import * as Actions from '.';

describe('themeActions', () => {
  it.skip('should create action setActiveTheme', () => {
    const expectedAction = {
      type: Actions.SET_ACTIVE_THEME,
    };

    expect(Actions.setActiveTheme()).toEqual(expectedAction);
  });
});
