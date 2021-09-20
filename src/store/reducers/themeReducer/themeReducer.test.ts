import { Theme } from 'constants/Theme';

import { SET_ACTIVE_THEME } from 'store/actions';

import { themeReducer } from '.';

describe('themeReducer', () => {
  it('should match initial state values', () => {
    // TODO
      // TODO inline snapshot
    expect(themeReducer(undefined, {} as any)).toEqual({
      activeTheme: Theme.Light,
    });
  });

  // TODO each
  it('should set theme', () => {
    expect(
      themeReducer(undefined, {
        type: SET_ACTIVE_THEME,
        payload: Theme.Dark,
      })
      // TODO inline snapshot
    ).toEqual({
      activeTheme: Theme.Dark,
    });
  });
});
