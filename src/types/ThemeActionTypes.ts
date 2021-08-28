import { SET_ACTIVE_THEME } from 'store/actions';

import { Theme } from 'constants/Theme';

export interface ThemeState {
  readonly activeTheme: Theme;
}

interface SetActiveThemeAction {
  readonly type: typeof SET_ACTIVE_THEME;
  readonly payload: Theme;
}

export type ThemeActionTypes = SetActiveThemeAction;
