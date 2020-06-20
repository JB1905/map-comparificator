import { OPEN_ALERT, CLOSE_ALERT } from 'actions';

import { AlertState } from 'interfaces/AlertState';

import type { AlertActionTypes } from 'types/AlertActionTypes';

// const initialState: AlertState = {
//   alerts: [],
// };

const initialState: AlertState = {
  alertType: null,
  alertProps: null,
  // isOpen: false,
};

export const alertReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case OPEN_ALERT:
      return {
        ...state,
        alertType: action.payload,
      };

    case CLOSE_ALERT:
      return initialState;

    default:
      return state;
  }
};
