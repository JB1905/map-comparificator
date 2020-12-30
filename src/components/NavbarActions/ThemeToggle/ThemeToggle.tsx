import { Button, Popover, Menu, MenuItem } from '@blueprintjs/core';
import { useHotkeys } from 'react-hotkeys-hook';

import { useTheme } from 'hooks/useTheme';

import { Theme } from 'enums/Theme';
import { KeyboardShortcut } from 'enums/KeyboardShortcut';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  useHotkeys(KeyboardShortcut.ToggleTheme, toggleTheme, [toggleTheme]);

  return (
    <Popover
      content={
        <Menu>
          {Object.keys(Theme).map((theme) => (
            <MenuItem
              text={theme}
              // icon="send-to-map"
              key={theme}
              // disabled={JSON.stringify(activeLayout).includes(map)}
              // onClick={() => openLayoutWindow(map)}
            />
          ))}
        </Menu>
      }
      // position={Position.TOP} // TODO
    >
      <Button
        icon={isDark ? 'flash' : 'moon'}
        // onClick={toggleTheme}
        minimal
      />
    </Popover>
  );
};

export default ThemeToggle;
