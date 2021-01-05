import { Button, Popover, Menu, MenuItem } from '@blueprintjs/core';
import { useHotkeys } from 'react-hotkeys-hook';

import { useTheme } from 'hooks/useTheme';

import { KeyboardShortcut } from 'enums/KeyboardShortcut';

const ThemeToggle = () => {
  const { themes, isDark, activeTheme, setTheme, toggleTheme } = useTheme();

  useHotkeys(KeyboardShortcut.ToggleTheme, toggleTheme, [toggleTheme]);

  return (
    <Popover
      content={
        <Menu>
          {Object.entries(themes).map(([key, {title, icon}]: any) => (
            <MenuItem
              text={title}
              key={key}
              onClick={() => setTheme(key as any)}
              active={activeTheme === key as any}
              icon={icon}
            />
          ))}
        </Menu>
      }
    >
      <Button icon={themes[activeTheme].icon} minimal />
    </Popover>
  );
};

export default ThemeToggle;
