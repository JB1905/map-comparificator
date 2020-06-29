import { OPEN_MODAL, CLOSE_MODAL } from 'actions';

import { ModalType } from 'enums/ModalType';

export interface ModalState {
  modalType: ModalType | null;
  modalParams?: object;
}

export interface OpenModalAction {
  readonly type: typeof OPEN_MODAL;
  readonly payload: object;
}

export interface CloseModalAction {
  readonly type: typeof CLOSE_MODAL;
}
