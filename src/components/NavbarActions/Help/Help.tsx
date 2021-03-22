import { Button, useHotkeys } from '@blueprintjs/core';
import { useCallback, useMemo } from 'react';

import { useModal } from 'hooks/useModal';

import { ModalType } from 'enums/ModalType';
import { KeyboardShortcut } from 'enums/KeyboardShortcut';

const Help = () => {
  const { openModal } = useModal();

  const openHelp = useCallback(() => openModal(ModalType.Help), [openModal]);

  const hotkeys = useMemo(
    () => [
      {
        combo: KeyboardShortcut.OpenHelp,
        global: true,
        label: '', // TODO translate
        onKeyDown: openHelp,
      },
    ],
    [openHelp]
  );

  useHotkeys(hotkeys);

  return <Button icon="help" onClick={openHelp} minimal />;
};

export default Help;
