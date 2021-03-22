import { Button, useHotkeys } from '@blueprintjs/core';
import { useMemo } from 'react';

import { useLayout } from 'hooks/useLayout';
import { useCustomization } from 'hooks/useCustomization';

import { KeyboardShortcut } from 'enums/KeyboardShortcut';

const LockToggle = () => {
  const { isEmptyLayout } = useLayout();

  const { isCustomizationEnabled, toggleCustomization } = useCustomization();

  const hotkeys = useMemo(
    () => [
      {
        combo: KeyboardShortcut.ToggleLock,
        global: true,
        label: '', // TODO translate
        onKeyDown: () => (!isEmptyLayout ? toggleCustomization() : undefined),
      },
    ],
    [isEmptyLayout, toggleCustomization]
  );

  useHotkeys(hotkeys);

  return (
    <Button
      icon={isCustomizationEnabled ? 'unlock' : 'lock'}
      onClick={toggleCustomization}
      disabled={isEmptyLayout}
      minimal
    />
  );
};

export default LockToggle;
