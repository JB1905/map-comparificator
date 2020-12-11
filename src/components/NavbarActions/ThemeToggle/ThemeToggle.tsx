import React from 'react';
import { Button } from '@blueprintjs/core';
import { useHotkeys } from 'react-hotkeys-hook';

import { useTheme } from 'hooks/useTheme';

import { KeyboardShortcut } from 'enums/KeyboardShortcut';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  // TODO
  // useHotkeys(KeyboardShortcut.ToggleTheme, toggleTheme);

  return (
    <Button icon={isDark ? 'flash' : 'moon'} onClick={toggleTheme} minimal />
  );
};

export default ThemeToggle;
