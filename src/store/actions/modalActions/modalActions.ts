import type { CustomLayout } from 'types/Layout';

import { ModalType } from 'constants/ModalType';

export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

// TODO move to types
interface OpenCreateModalPayload {
  readonly modalType: ModalType.Create;
}

interface OpenEditModalPayload {
  readonly modalType: ModalType.Edit;
  readonly modalParams: CustomLayout;
}

interface OpenDeleteModalPayload {
  readonly modalType: ModalType.Delete;
  readonly modalParams: CustomLayout;
}

interface OpenHelpModalPayload {
  readonly modalType: ModalType.Help;
}

export type OpenModalPayload =
  | OpenCreateModalPayload
  | OpenEditModalPayload
  | OpenDeleteModalPayload
  | OpenHelpModalPayload;

export const openModal = (payload: OpenModalPayload) => ({
  type: OPEN_MODAL,
  payload,
});

export const closeModal = () => ({
  type: CLOSE_MODAL,
});
