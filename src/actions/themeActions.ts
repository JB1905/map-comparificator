import { Theme } from 'enums/Theme';

export const SET_ACTIVE_THEME = 'SET_ACTIVE_THEME';

export const setActiveTheme = (payload: Theme) => ({
  type: SET_ACTIVE_THEME,
  payload,
});
