import { Button, Menu, MenuItem, useHotkeys } from '@blueprintjs/core';
import { Popover2 } from '@blueprintjs/popover2';
import { useMemo } from 'react';

import { useTheme } from 'hooks/useTheme';

import { KeyboardShortcut } from 'enums/KeyboardShortcut';
import { Theme } from 'enums/Theme';

const ThemeToggle = () => {
  const { themes, activeTheme, setTheme, toggleTheme } = useTheme();

  const hotkeys = useMemo(
    () => [
      {
        combo: KeyboardShortcut.ToggleTheme,
        global: true,
        label: '', // TODO translate
        onKeyDown: toggleTheme,
      },
    ],
    [toggleTheme]
  );

  useHotkeys(hotkeys);

  return (
    <Popover2
      content={
        <Menu>
          {/*TODO*/}
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
      {/* TODO */}
      <Button icon={(themes as any)?.[activeTheme]?.icon} minimal />
    </Popover2>
  );
};

export default ThemeToggle;
