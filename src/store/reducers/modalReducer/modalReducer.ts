import { OPEN_MODAL, CLOSE_MODAL } from '../../actions';

import type { ModalState, ModalActionTypes } from 'types/ModalActionTypes';

// TODO OpenModalPayload
const initialState: ModalState = {
  modalType: null,
  modalParams: null,
};

export const modalReducer = (
  state = initialState,
  action: ModalActionTypes
) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        ...action.payload,
      };

    case CLOSE_MODAL:
      return initialState;

    default:
      return state;
  }
};
