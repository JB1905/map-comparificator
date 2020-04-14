import { SET_THEME } from '../actions';

const initialState = {
  activeTheme: 'light',
};

export const themeReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_THEME:
      return { ...state, activeTheme: action.payload };

    default:
      return state;
  }
};
