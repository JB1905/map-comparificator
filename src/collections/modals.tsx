import React from 'react';

import CreatePattern from 'modals/CreatePattern';
import EditPattern from 'modals/EditPattern';
import DeletePattern from 'modals/DeletePattern';

import { ModalType } from 'enums/ModalType';

export const ALERTS: Record<string, JSX.Element> = {
  [ModalType.Create]: <CreatePattern />,
  [ModalType.Edit]: <EditPattern />,
  [ModalType.Delete]: <DeletePattern />,
};
