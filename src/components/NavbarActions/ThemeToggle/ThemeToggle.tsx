import { Button, Menu, MenuItem } from '@blueprintjs/core';
import { Popover2 } from '@blueprintjs/popover2';
import { useHotkeys } from 'react-hotkeys-hook';

import { useSupportedScreenSize } from 'hooks/useSupportedScreenSize';
import { useTheme } from 'hooks/useTheme';

import { KeyboardShortcut } from 'constants/KeyboardShortcut';
import { Theme } from 'constants/Theme';

const ThemeToggle = () => {
  const isSupportedScreenSize = useSupportedScreenSize();

  const { themes, activeTheme, setTheme, toggleTheme } = useTheme();

  useHotkeys(KeyboardShortcut.ToggleTheme, toggleTheme, [toggleTheme]);

  return (
    <Popover2
      position={isSupportedScreenSize ? undefined : 'bottom-right'}
      content={
        <Menu>
          {/* TODO refactor */}
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
      {/* TODO remove as any */}
      <Button icon={(themes as any)?.[activeTheme]?.icon} minimal />
    </Popover2>
  );
};

export default ThemeToggle;
