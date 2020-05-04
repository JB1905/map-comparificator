import React, { useState } from 'react';
import { Alert, InputGroup } from '@blueprintjs/core';

import { useLayout } from 'hooks/useLayout';

const PatternEditor: React.FC<any> = ({ isOpen, onCancel }) => {
  const {
    createCustomLayout,
    initialLayouts,
    customLayouts,
    activeLayout,
  } = useLayout();

  const [name, setName] = useState('');

  const layoutWithNameExists = () => {
    return [...initialLayouts, ...customLayouts].find(
      (layout) => layout.name === name
    );
  };

  const layoutWithPatternExists = () => {
    return [...initialLayouts, ...customLayouts].find(
      (layout) => JSON.stringify(layout.layout) === JSON.stringify(activeLayout)
    );
  };

  const submit = () => {
    if (name && !layoutWithNameExists() && !layoutWithPatternExists()) {
      createCustomLayout(name);

      onCancel();
    }
  };

  return (
    <Alert
      icon="add"
      isOpen={isOpen}
      confirmButtonText="Save"
      cancelButtonText="Cancel"
      onCancel={onCancel}
      onConfirm={submit}
    >
      <InputGroup
        large
        type="text"
        placeholder="Save as..."
        onChange={(e: any) => setName(e.target.value)}
      />
    </Alert>
  );
};

export default PatternEditor;
