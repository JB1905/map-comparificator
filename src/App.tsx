import React from 'react';
import { useDispatch } from 'react-redux';
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

import { useGeolocation } from './hooks/useGeolocation';
import { useTheme } from './hooks/useTheme';

import { initialLayout } from './constants/initialLayout';
import { centeringModes } from './constants/centeringModes';

import { UPDATE_COORDS } from './actions';

import { Theme } from './enums/Theme';

const App: React.FC = () => {
  const dispatch = useDispatch();

  const { getCoords } = useGeolocation();

  const { appearance, toggleTheme } = useTheme();

  const getLocalForecast = () => {
    getCoords(({ latitude, longitude }) => {
      dispatch({
        type: UPDATE_COORDS,
        payload: [latitude, longitude],
      });
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
          <Button icon="geolocation" onClick={getLocalForecast} minimal />

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
        </Navbar.Group>
      </Navbar>

      <div id="app">
        <Mosaic
          renderTile={tileRenderer}
          initialValue={initialLayout}
          zeroStateView={<div />}
          className={`mosaic-blueprint-theme ${
            appearance === Theme.Dark ? Classes.DARK : ''
          }`}
        />
      </div>
    </div>
  );
};

export default App;
