import { SET_THEME } from '../actions';

const initialState = {
  appearance: 'light',
};

export const themeReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_THEME:
      return { ...state, appearance: action.payload };

    default:
      return state;
  }
};
