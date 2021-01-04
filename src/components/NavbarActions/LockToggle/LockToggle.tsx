import { Button } from '@blueprintjs/core';
import { useHotkeys } from 'react-hotkeys-hook';

import { useLayout } from 'hooks/useLayout';
import { useCustomization } from 'hooks/useCustomization';

import { KeyboardShortcut } from 'enums/KeyboardShortcut';

const LockToggle = () => {
  const { isEmptyLayout } = useLayout();

  const { isCustomizationEnabled, toggleCustomization } = useCustomization();

  useHotkeys(
    KeyboardShortcut.ToggleLock,
    () => (!isEmptyLayout ? toggleCustomization() : undefined),
    [isEmptyLayout]
  );

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
