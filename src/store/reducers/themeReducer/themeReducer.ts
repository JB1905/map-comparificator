import { SET_ACTIVE_THEME } from '../../actions';

import { Theme } from 'constants/Theme';

import type { ThemeState, ThemeActionTypes } from 'types/ThemeActionTypes';

const initialState: ThemeState = {
  activeTheme: Theme.Light,
};

export const themeReducer = (
  state = initialState,
  action: ThemeActionTypes
) => {
  switch (action.type) {
    case SET_ACTIVE_THEME:
      return { ...state, activeTheme: action.payload };

    default:
      return state;
  }
};
