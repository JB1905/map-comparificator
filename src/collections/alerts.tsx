import React from 'react';

import CreatePattern from 'alerts/CreatePattern';
import EditPattern from 'alerts/EditPattern';
import DeletePattern from 'alerts/DeletePattern';

import { AlertType } from 'enums/AlertType';

export const ALERTS: Record<string, JSX.Element> = {
  [AlertType.Create]: <CreatePattern />,
  [AlertType.Edit]: <EditPattern />,
  [AlertType.Delete]: <DeletePattern />,
};
