import { SET_THEME } from '../actions';

import { Theme } from '../enums/Theme';

interface ThemeState {
  activeTheme: Theme;
}

interface SetThemeAction {
  type: typeof SET_THEME;
  payload: Theme;
}

type ThemeActionTypes = SetThemeAction;

const initialState: ThemeState = {
  activeTheme: Theme.Light,
};

export const themeReducer = (
  state = initialState,
  action: ThemeActionTypes
) => {
  switch (action.type) {
    case SET_THEME:
      return { ...state, activeTheme: action.payload };

    default:
      return state;
  }
};
