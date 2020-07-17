import React from 'react';
import { Alignment, Navbar, Button } from '@blueprintjs/core';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import 'react-mosaic-component/react-mosaic-component.css';

import { ReactComponent as Logo } from 'assets/logo.svg';

import SearchForm from 'components/SearchForm';

import { useMaps } from 'hooks/useMaps';
import { useTheme } from 'hooks/useTheme';
import { useLayout } from 'hooks/useLayout';

import './NavbarPrimaryGroup.scss';

const NavbarPrimaryGroup: React.FC = () => {
  const { isGeolocationAvailable, getGeolocation, setCoords } = useMaps();

  const { isDark, toggleTheme } = useTheme();

  const { isEmptyLayout } = useLayout();

  const getCurrentLocation = () => {
    getGeolocation(({ latitude, longitude }) => {
      setCoords([latitude, longitude]);
    });
  };

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
