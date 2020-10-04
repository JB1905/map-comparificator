import { OPEN_MODAL, CLOSE_MODAL } from 'actions';

import { CustomLayout } from 'types/Layout';

import { ModalType } from 'enums/ModalType';

export interface ModalState {
  modalType: ModalType | null;
  modalParams: CustomLayout | null;
  // modalParams?: Record<string, CustomLayout> | null;
}

export interface OpenModalAction {
  readonly type: typeof OPEN_MODAL;
  readonly payload: Record<string, CustomLayout>;
}

export interface CloseModalAction {
  readonly type: typeof CLOSE_MODAL;
}
