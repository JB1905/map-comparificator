import { SET_LAYOUT, RESET_LAYOUT } from '../actions/layoutActions';

import { initialLayout } from '../constants/initialLayout';

export const layoutReducer = (state = initialLayout, action: any) => {
  switch (action.type) {
    case SET_LAYOUT:
      return action.payload;

    case RESET_LAYOUT:
      return initialLayout;

    default:
      return state;
  }
};
