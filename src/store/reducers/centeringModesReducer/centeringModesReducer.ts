import { SET_ACTIVE_CENTERING_MODE } from '../../actions';

import { CenteringModesState } from 'types/CenteringModesState';

import type { CenteringModesActionTypes } from 'types/CenteringModesActionTypes';

import { CenteringMode } from 'constants/CenteringMode';

const initialState: CenteringModesState = {
  activeCenteringMode: CenteringMode.Center,
};

export const centeringModesReducer = (
  state = initialState,
  action: CenteringModesActionTypes
) => {
  switch (action.type) {
    case SET_ACTIVE_CENTERING_MODE:
      return { ...state, activeCenteringMode: action.payload };

    default:
      return state;
  }
};
