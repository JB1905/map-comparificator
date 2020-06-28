import { OPEN_MODAL, CLOSE_MODAL } from 'actions';

import { ModalType } from 'enums/ModalType';

export interface ModalState {
  modalType: ModalType | null;
  param?: any;
}

export interface OpenModalAction {
  readonly type: typeof OPEN_MODAL;
  readonly payload: any;
}

export interface CloseModalAction {
  readonly type: typeof CLOSE_MODAL;
}
