import { OPEN_ALERT, CLOSE_ALERT } from 'actions';

import { AlertState } from 'interfaces/AlertState';

import type { AlertActionTypes } from 'types/AlertActionTypes';

const initialState: AlertState = {
  alerts: [],
};

export const alertReducer = (
  state = initialState,
  action: AlertActionTypes
) => {
  switch (action.type) {
    case OPEN_ALERT:
      return {
        // isOpen: true,
        // options: action.payload
      };

    case CLOSE_ALERT:
      return {
        // isOpen: false,
        // alertProps: {}
      };

    default:
      return state;
  }
};
