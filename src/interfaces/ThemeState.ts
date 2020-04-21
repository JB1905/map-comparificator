import { SET_THEME } from 'actions';

import { Theme } from 'enums/Theme';

export interface ThemeState {
  activeTheme: Theme;
}

export interface SetThemeAction {
  type: typeof SET_THEME;
  payload: Theme;
}
