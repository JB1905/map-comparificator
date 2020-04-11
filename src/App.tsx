import React from 'react';
import {
  Alignment,
  Navbar,
  Button,
  Popover,
  Menu,
  Position,
  MenuItem,
  Classes,
} from '@blueprintjs/core';
import { Mosaic } from 'react-mosaic-component';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import 'react-mosaic-component/react-mosaic-component.css';

import { ReactComponent as Logo } from './assets/logo.svg';

import { tileRenderer } from './tileRenderer';

import { ELEMENT_MAP } from './map';

import SearchForm from './containers/SearchForm';
import ErrorScreen from './containers/ErrorScreen';

import { useGeolocation } from './hooks/useGeolocation';
import { useTheme } from './hooks/useTheme';
import { useLayout } from './hooks/useLayout';
import { useSettings } from './hooks/useSettings';

import { centeringModes } from './constants/centeringModes';

import { compareObjects } from './helpers/compareObjects';

import { Theme } from './enums/Theme';

const App: React.FC = () => {
  const { getGeolocation, setCoords } = useGeolocation();

  const { appearance, toggleTheme } = useTheme();

  const { layout, isEmptyLayout, setLayout, availableLayouts } = useLayout();

  const { sync, setSyncType } = useSettings();

  const getCurrentLocation = () => {
    getGeolocation(({ latitude, longitude }) => {
      setCoords([latitude, longitude]);
    });
  };

  return (
    <div className={appearance === Theme.Dark ? Classes.DARK : ''}>
      <Navbar>
        <Navbar.Group align={Alignment.LEFT}>
          <Navbar.Heading>
            <Logo className="logo" />
          </Navbar.Heading>

          <Button
            icon={appearance === Theme.Dark ? 'flash' : 'moon'}
            onClick={toggleTheme}
            minimal
          />

          <Navbar.Divider />

          <SearchForm />
        </Navbar.Group>

        <Navbar.Group align={Alignment.RIGHT}>
          <Button
            icon="geolocation"
            onClick={getCurrentLocation}
            disabled={isEmptyLayout}
            minimal
          />

          <Navbar.Divider />

          <Popover
            content={
              <Menu>
                {Object.keys(ELEMENT_MAP).map((map) => (
                  <MenuItem text={map} key={map} />
                ))}
              </Menu>
            }
            position={Position.TOP}
          >
            <Button icon="map" text="Maps" minimal />
          </Popover>

          <Navbar.Divider />

          <Popover
            content={
              <Menu>
                {centeringModes.map((centeringMode) => (
                  <MenuItem
                    text={centeringMode}
                    key={centeringMode}
                    active={sync === centeringMode}
                    onClick={() => setSyncType(centeringMode)}
                  />
                ))}
              </Menu>
            }
            position={Position.TOP}
          >
            <Button
              icon="map-marker"
              text="Centering Mode"
              disabled={isEmptyLayout}
              minimal
            />
          </Popover>

          <Navbar.Divider />

          <Popover
            content={
              <Menu>
                {Object.entries(availableLayouts).map(([name, pattern]) => (
                  <MenuItem
                    text={name}
                    key={name}
                    active={compareObjects(layout, pattern)}
                    onClick={() => setLayout(pattern as any)}
                  />
                ))}
              </Menu>
            }
            position={Position.TOP}
          >
            <Button icon="reset" minimal />
          </Popover>
        </Navbar.Group>
      </Navbar>

      <div id="app">
        <Mosaic
          renderTile={tileRenderer}
          initialValue={layout}
          zeroStateView={
            <ErrorScreen
              title="No map preview selected"
              message="Select maps from the menu"
            />
          }
          onChange={(changedLayout) => setLayout(changedLayout)}
          className={`mosaic-blueprint-theme ${
            appearance === Theme.Dark ? Classes.DARK : ''
          }`}
        />
      </div>
    </div>
  );
};

export default App;
