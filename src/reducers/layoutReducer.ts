import {
  SET_LAYOUT,
  CREATE_LAYOUT,
  REMOVE_LAYOUT,
} from '../actions/layoutActions';

import { gridLayout } from '../constants/initialLayout';

const initialState = {
  activeLayout: gridLayout,
  customLayouts: [],
};

export const layoutReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_LAYOUT:
      return { ...state, activeLayout: action.payload };

    case CREATE_LAYOUT:
      return {
        ...state,
        customLayouts: [
          ...state.customLayouts,
          {
            name: action.payload.name,
            layout: action.payload.layout,
          },
        ],
      };

    case REMOVE_LAYOUT:
      return state;

    default:
      return state;
  }
};
