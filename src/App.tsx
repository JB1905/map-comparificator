import React from 'react';
// import { useViewport } from 'react-viewport-hooks';
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

// import { ReactComponent as Logo } from './assets/logo.svg';

import { tileRenderer } from './tileRenderer';

import { ELEMENT_MAP } from './map';

import SearchForm from './containers/SearchForm';
import ErrorScreen from './containers/ErrorScreen';

import { useGeolocation } from './hooks/useGeolocation';
import { useTheme } from './hooks/useTheme';
import { useLayout } from './hooks/useLayout';

import { centeringModes } from './constants/centeringModes';

import { UPDATE_COORDS } from './actions';

import { Theme } from './enums/Theme';

const App: React.FC = () => {
  // const { vw } = useViewport();

  const { getGeolocation, setCoords } = useGeolocation();

  const { appearance, toggleTheme } = useTheme();

  const { layout, setLayout, resetLayout, isInitialLayout } = useLayout();

  const getCurrentLocation = () => {
    getGeolocation(({ latitude, longitude }) => {
      setCoords([latitude, longitude]);
    });
  };

  // if (vw < 760) {
  //   return null;
  // }

  return (
    <div className={appearance === Theme.Dark ? Classes.DARK : ''}>
      <Navbar>
        <Navbar.Group align={Alignment.LEFT}>
          {/* <Navbar.Heading>
            <Logo className="logo" />
          </Navbar.Heading> */}

          <Button
            icon={appearance === Theme.Dark ? 'flash' : 'moon'}
            onClick={toggleTheme}
            minimal
          />

          <Navbar.Divider />

          <SearchForm />
        </Navbar.Group>

        <Navbar.Group align={Alignment.RIGHT}>
          <Button icon="geolocation" onClick={getCurrentLocation} minimal />

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
                  <MenuItem text={centeringMode} key={centeringMode} />
                ))}
              </Menu>
            }
            position={Position.TOP_RIGHT}
          >
            <Button icon="map-marker" text="Centering Mode" minimal />
          </Popover>

          <Navbar.Divider />

          <Button
            icon="reset"
            onClick={resetLayout}
            disabled={isInitialLayout}
            minimal
          />
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
