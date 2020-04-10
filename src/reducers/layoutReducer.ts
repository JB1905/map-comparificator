import { SET_LAYOUT } from '../actions/layoutActions';

import { gridLayout } from '../constants/initialLayout';

export const layoutReducer = (state = gridLayout, action: any) => {
  switch (action.type) {
    case SET_LAYOUT:
      return action.payload;

    default:
      return state;
  }
};
