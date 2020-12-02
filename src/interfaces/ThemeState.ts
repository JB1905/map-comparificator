import { SET_ACTIVE_THEME } from 'store/actions';

import { Theme } from 'enums/Theme';

export interface ThemeState {
  readonly activeTheme: Theme;
}

export interface SetActiveThemeAction {
  readonly type: typeof SET_ACTIVE_THEME;
  readonly payload: Theme;
}
