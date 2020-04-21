import { SET_THEME } from 'actions';

import { Theme } from 'enums/Theme';

import { ThemeState } from 'interfaces/ThemeState';

import { ThemeActionTypes } from 'types/ThemeActionTypes';

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
