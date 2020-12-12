import { Button, ButtonGroup } from '@blueprintjs/core';
import { useHotkeys } from 'react-hotkeys-hook';

import { KeyboardShortcut } from 'enums/KeyboardShortcut';

const HistoryActions = () => {
  useHotkeys(KeyboardShortcut.HistoryUndo, () => {});
  useHotkeys(KeyboardShortcut.HistoryRedo, () => {});

  return (
    <ButtonGroup minimal>
      <Button icon="reset" />

      <Button icon="repeat" />
    </ButtonGroup>
  );
};

export default HistoryActions;
