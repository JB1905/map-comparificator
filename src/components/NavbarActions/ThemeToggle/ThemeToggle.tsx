import { Button, Menu, MenuItem, Popover } from '@blueprintjs/core';
import { useHotkeys } from 'react-hotkeys-hook';

import { useSupportedScreenSize } from 'hooks/useSupportedScreenSize';
import { useTheme } from 'hooks/useTheme';

import { KeyboardShortcut } from 'enums/KeyboardShortcut';
import { Theme } from 'enums/Theme';

const ThemeToggle = () => {
  const isSupportedScreenSize = useSupportedScreenSize();

  const { themes, activeTheme, setTheme, toggleTheme } = useTheme();

  useHotkeys(KeyboardShortcut.ToggleTheme, toggleTheme, [toggleTheme]);

  return (
    <Popover
      position={isSupportedScreenSize ? undefined : 'bottom-right'}
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
    </Popover>
  );
};

export default ThemeToggle;
