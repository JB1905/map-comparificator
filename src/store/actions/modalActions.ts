import { ModalType } from 'enums/ModalType';
import { CustomLayout } from 'types/Layout';

export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

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
