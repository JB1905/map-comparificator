import CreatePattern from 'modals/CreatePattern';
import EditPattern from 'modals/EditPattern';
import DeletePattern from 'modals/DeletePattern';

import { ModalType } from 'enums/ModalType';

export const MODALS: Record<string, JSX.Element> | any = {
  [ModalType.Create]: CreatePattern,
  [ModalType.Edit]: EditPattern,
  [ModalType.Delete]: DeletePattern,
};
