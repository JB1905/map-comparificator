import { Button } from '@blueprintjs/core';
import { useHotkeys } from 'react-hotkeys-hook';
import { useCallback } from 'react';

import { useModal } from 'hooks/useModal';

import { ModalType } from 'constants/ModalType';
import { KeyboardShortcut } from 'constants/KeyboardShortcut';

const Help = () => {
  const { openModal } = useModal();

  const openHelp = useCallback(() => openModal(ModalType.Help), [openModal]);

  useHotkeys(KeyboardShortcut.OpenHelp, openHelp);

  return <Button icon="help" onClick={openHelp} minimal />;
};

// TODO
export default Help;
