import { Theme } from 'enums/Theme';

import { SET_ACTIVE_THEME } from 'store/actions';

import { themeReducer } from '.';

describe('themeReducer', () => {
  it('should match initial state values', () => {
    // TODO
    expect(themeReducer(undefined, {} as any)).toEqual({
      activeTheme: Theme.Light,
    });
  });

  it('should set theme', () => {
    expect(
      themeReducer(undefined, {
        type: SET_ACTIVE_THEME,
        payload: Theme.Dark,
      })
    ).toEqual({
      activeTheme: Theme.Dark,
    });
  });
});
