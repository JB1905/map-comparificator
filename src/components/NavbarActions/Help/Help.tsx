import { Button } from '@blueprintjs/core';
import { useHotkeys } from 'react-hotkeys-hook';

import { useModal } from 'hooks/useModal';

import { ModalType } from 'enums/ModalType';
import { KeyboardShortcut } from 'enums/KeyboardShortcut';

const Help = () => {
  const { openModal } = useModal();

  const openHelp = () => openModal(ModalType.Help);

  useHotkeys(KeyboardShortcut.OpenHelp, openHelp);

  return <Button icon="help" onClick={openHelp} minimal />;
};

export default Help;
