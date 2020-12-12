import { Button } from '@blueprintjs/core';
import { useHotkeys } from 'react-hotkeys-hook';

import { useTheme } from 'hooks/useTheme';

import { KeyboardShortcut } from 'enums/KeyboardShortcut';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  useHotkeys(KeyboardShortcut.ToggleTheme, toggleTheme, {}, [toggleTheme]);

  return (
    <Button icon={isDark ? 'flash' : 'moon'} onClick={toggleTheme} minimal />
  );
};

export default ThemeToggle;
