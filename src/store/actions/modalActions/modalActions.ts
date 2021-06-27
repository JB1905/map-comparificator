import type { CustomLayout } from 'types/Layout';

import { ModalType } from 'enums/ModalType';

export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

// TODO add type guard (discriminated union)
type OpenModalPayload = {
  readonly modalType: ModalType;
  readonly modalParams?: CustomLayout;
};

export const openModal = (payload: OpenModalPayload) => ({
  type: OPEN_MODAL,
  payload,
});

export const closeModal = () => ({
  type: CLOSE_MODAL,
});
