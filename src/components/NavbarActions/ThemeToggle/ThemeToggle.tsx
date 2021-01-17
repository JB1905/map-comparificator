import { Button, Popover, Menu, MenuItem } from '@blueprintjs/core';
import { useHotkeys } from 'react-hotkeys-hook';

import { useTheme } from 'hooks/useTheme';

import { KeyboardShortcut } from 'enums/KeyboardShortcut';
import { Theme } from 'enums/Theme';

const ThemeToggle = () => {
  const { themes, activeTheme, setTheme, toggleTheme } = useTheme();

  useHotkeys(KeyboardShortcut.ToggleTheme, toggleTheme, [toggleTheme]);

  return (
    <Popover
      content={
        <Menu>
          {Object.entries(themes).map(([key, { title, icon }]) => (
            <MenuItem
              text={title}
              key={key}
              onClick={() => setTheme(key as Theme)}
              active={activeTheme === key}
              icon={icon}
            />
          ))}
        </Menu>
      }
    >
      <Button
         icon={(themes as any)?.[activeTheme]?.icon}
        minimal
      />
    </Popover>
  );
};

export default ThemeToggle;
