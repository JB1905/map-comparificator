import { ModalType } from 'constants/ModalType';
import { OPEN_MODAL, CLOSE_MODAL, OpenModalPayload } from 'store/actions';

export type ModalActionTypes = OpenModalAction | CloseModalAction;

export interface OpenModalAction {
  readonly type: typeof OPEN_MODAL;
  readonly payload: OpenModalPayload;
}

export interface CloseModalAction {
  readonly type: typeof CLOSE_MODAL;
}


// export interface ModalState {
//   modalType: ModalType | null;
//   modalParams: CustomLayout | null;
// }
