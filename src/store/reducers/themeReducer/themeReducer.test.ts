import { Theme } from 'enums/Theme';

import { SET_ACTIVE_THEME } from 'store/actions';

import { themeReducer } from '.';

describe('themeReducer', () => {
  it('should match initial state values', () => {
    expect(themeReducer(undefined, {} as any)).toEqual({
      activeTheme: Theme.Light,
    });
  });

  it.skip('should', () => {
    expect(
      themeReducer(undefined, {
        type: SET_ACTIVE_THEME,
        // payload:
      })
    ).toEqual({
      // activeTheme:
    });
  });
});
