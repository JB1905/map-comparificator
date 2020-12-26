import { Button, ButtonGroup } from '@blueprintjs/core';

const History = () => {
  return (
    <ButtonGroup minimal>
      <Button icon="undo" />
      <Button icon="redo" />
    </ButtonGroup>
  );
};

export default History;
