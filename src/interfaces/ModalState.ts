import { OPEN_MODAL, CLOSE_MODAL } from 'actions';

import { ModalType } from 'enums/ModalType';

// TODO any
export interface ModalState {
  modalType: ModalType | null;
  modalParams?: Record<string, object> | null;
}

// TODO any
export interface OpenModalAction {
  readonly type: typeof OPEN_MODAL;
  readonly payload: Record<string, object>;
}

export interface CloseModalAction {
  readonly type: typeof CLOSE_MODAL;
}
