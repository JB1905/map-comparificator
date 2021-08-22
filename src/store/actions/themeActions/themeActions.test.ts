import { Theme } from 'constants/Theme';

import * as Actions from '.';

describe('themeActions', () => {
  it('should create action setActiveTheme', () => {
    const expectedAction = {
      type: Actions.SET_ACTIVE_THEME,
      payload: Theme.Dark,
    };

    expect(Actions.setActiveTheme(Theme.Dark)).toEqual(expectedAction);
  });
});
