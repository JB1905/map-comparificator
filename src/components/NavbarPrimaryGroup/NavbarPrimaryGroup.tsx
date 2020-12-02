import { Alignment, Navbar, Button } from '@blueprintjs/core';
import { useHotkeys } from 'react-hotkeys-hook';

import { ReactComponent as Logo } from 'assets/logo.svg';

import SearchForm from 'components/SearchForm';

import { useMaps } from 'hooks/useMaps';
import { useTheme } from 'hooks/useTheme';
import { useLayout } from 'hooks/useLayout';

import { KeyboardShortcut } from 'enums/KeyboardShortcut';

import './NavbarPrimaryGroup.scss';

const NavbarPrimaryGroup = () => {
  const { isGeolocationAvailable, getGeolocation, setCoords } = useMaps();

  const { isDark, toggleTheme } = useTheme();

  const { isEmptyLayout } = useLayout();

  const getCurrentLocation = () => {
    getGeolocation(({ latitude, longitude }) => {
      setCoords([latitude, longitude]);
    });
  };

  // TODO
  // useHotkeys(KeyboardShortcut.ToggleTheme, toggleTheme);

  return (
    <Navbar.Group align={Alignment.LEFT}>
      <Navbar.Heading>
        <Logo className="logo" />
      </Navbar.Heading>

      <Button icon={isDark ? 'flash' : 'moon'} onClick={toggleTheme} minimal />

      <Navbar.Divider />

      <SearchForm />

      {isGeolocationAvailable && (
        <>
          <Navbar.Divider />

          <Button
            icon="geolocation"
            onClick={getCurrentLocation}
            disabled={isEmptyLayout}
            minimal
          />
        </>
      )}
    </Navbar.Group>
  );
};

export default NavbarPrimaryGroup;
