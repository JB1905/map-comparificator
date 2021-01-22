import { OPEN_MODAL, CLOSE_MODAL } from 'store/actions';

import type { CustomLayout } from 'types/Layout';

import { ModalType } from 'enums/ModalType';

// TODO
export type ModalCreate = {
  modalType: ModalType.Create;
  modalParams: CustomLayout;
};

export type ModalEdit = {
  modalType: ModalType.Edit;
  modalParams: CustomLayout;
};

export type ModalDelete = {
  modalType: ModalType.Delete;
  // modalParams: null
};

export type ModalHelp = {
  modalType: ModalType.Help;
  // modalParams: null
};

export type X = ModalCreate | ModalEdit | ModalDelete | ModalHelp;

export interface ModalState {
  modalType: ModalType | null;
  modalParams: CustomLayout | null;
}

export interface OpenModalAction {
  readonly type: typeof OPEN_MODAL;
  readonly payload: Record<string, CustomLayout>;
}

export interface CloseModalAction {
  readonly type: typeof CLOSE_MODAL;
}
