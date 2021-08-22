import CreatePattern from 'components/Modals/CreatePattern';
import EditPattern from 'components/Modals/EditPattern';
import DeletePattern from 'components/Modals/DeletePattern';
import Help from 'components/Modals/Help';

import { ModalType } from 'constants/ModalType';

export const MODALS = {
  [ModalType.Create]: CreatePattern,
  [ModalType.Edit]: EditPattern,
  [ModalType.Delete]: DeletePattern,
  [ModalType.Help]: Help,
};
