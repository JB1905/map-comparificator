import React from 'react';
import { Alert, InputGroup } from '@blueprintjs/core';

const PatternEditor: React.FC = () => {
  return (
    <Alert
      // icon="add"
      // isOpen={true}
      confirmButtonText="Save"
      cancelButtonText="Cancel"
      // onCancel={() => setIsOpen(false)}
    >
      <InputGroup large type="text" placeholder="Save as..." />
    </Alert>
  );
};

export default PatternEditor;
