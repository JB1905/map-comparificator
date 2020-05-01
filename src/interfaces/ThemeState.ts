import { SET_ACTIVE_THEME } from 'actions';

import { Theme } from 'enums/Theme';

export interface ThemeState {
  activeTheme: Theme;
}

export interface SetActiveThemeAction {
  type: typeof SET_ACTIVE_THEME;
  payload: Theme;
}
