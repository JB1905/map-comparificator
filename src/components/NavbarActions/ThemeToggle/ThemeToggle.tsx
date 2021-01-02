import { Button, Popover, Menu, MenuItem } from '@blueprintjs/core';
// import { useHotkeys } from 'react-hotkeys-hook';

import { useTheme } from 'hooks/useTheme';

import { Theme } from 'enums/Theme';
// import { KeyboardShortcut } from 'enums/KeyboardShortcut';

const ThemeToggle = () => {
  const { isDark, setTheme } = useTheme();

  // useHotkeys(KeyboardShortcut.ToggleTheme, toggleTheme, {}, [toggleTheme]);

  return (
    <Popover
      content={
        <Menu>
          {Object.keys(Theme).map((theme) => (
            <MenuItem
              text={theme}
              key={theme}
              // onClick={() => setTheme(theme)}
            />
          ))}
        </Menu>
      }
    >
      <Button icon={isDark ? 'flash' : 'moon'} minimal />
    </Popover>
  );
};

export default ThemeToggle;
