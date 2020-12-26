import { Button, ButtonGroup } from '@blueprintjs/core';
import { useHotkeys } from 'react-hotkeys-hook';

import { KeyboardShortcut } from 'enums/KeyboardShortcut';

const History = () => {
  // TODO connect history actions
  useHotkeys(KeyboardShortcut.HistoryUndo, () => {}, {}, []);
  useHotkeys(KeyboardShortcut.HistoryRedo, () => {}, {}, []);

  return (
    <ButtonGroup minimal>
      <Button icon="undo" />
      <Button icon="redo" />
    </ButtonGroup>
  );
};

export default History;
