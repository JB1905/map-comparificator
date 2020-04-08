import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
import { Mosaic, MosaicWindow } from 'react-mosaic-component';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import 'react-mosaic-component/react-mosaic-component.css';

import AppleMaps from './tiles/Apple';
import BingMaps from './tiles/Bing';
import GoogleMaps from './tiles/Google';
import HereMaps from './tiles/Here';
import OpenStreetMap from './tiles/OSM';
import MapBox from './tiles/MapBox';

import { useGeolocation } from './hooks/useGeolocation';
import { useTheme } from './hooks/useTheme';

import { initialLayout } from './constants/initialLayout';

import { SEARCH, UPDATE_COORDS, SET_THEME } from './actions';
import { Theme } from './enums/Theme';

const tileRenderer = (id: any, path: any) => {
  const ELEMENT_MAP: { [viewId: string]: JSX.Element } = {
    'Apple Maps': <AppleMaps />,
    'Bing Maps': <BingMaps />,
    'Google Maps': <GoogleMaps />,
    'Here Maps': <HereMaps />,
    'Open Street Map': <OpenStreetMap />,
    MapBox: <MapBox />,
  };

  return (
    <MosaicWindow path={path} title={id}>
      {ELEMENT_MAP[id]}
    </MosaicWindow>
  );
};

const App: React.FC = () => {
  const dispatch = useDispatch();

  const submit = (e: any) => {
    console.log(e.target.value);
    // dispatch({ type: SEARCH, payload: '' });
  };

  const { getCoords } = useGeolocation();

  const getLocalForecast = () => {
    getCoords(({ latitude, longitude }) => {
      dispatch({
        type: UPDATE_COORDS,
        payload: [latitude, longitude],
      });
    });
  };

  const { appearance } = useTheme();

  return (
    <div className={appearance === Theme.Dark ? Classes.DARK : ''}>
      <Navbar>
        <Navbar.Group align={Alignment.LEFT}>
          <Navbar.Heading>Map Comparificator</Navbar.Heading>

          <Button
            icon={appearance === Theme.Dark ? 'flash' : 'moon'}
            onClick={() =>
              dispatch({
                type: SET_THEME,
                payload: appearance === Theme.Dark ? Theme.Light : Theme.Dark,
              })
            }
            minimal
          />

          <Navbar.Divider />

          <input
            className="bp3-input"
            placeholder="Search..."
            type="text"
            onChange={submit}
            // onKeyDown={submit}
          />
        </Navbar.Group>

        <Navbar.Group align={Alignment.RIGHT}>
          <Button icon="geolocation" onClick={getLocalForecast} minimal />

          {/* <Button icon="compass" onClick={() => null} minimal /> */}

          <Navbar.Divider />

          <Popover content={<Menu></Menu>} position={Position.TOP}>
            <Button icon="map" text="Maps" minimal />
          </Popover>

          <Navbar.Divider />

          <Popover
            content={
              <Menu>
                <MenuItem text="Center" />
                <MenuItem text="Fill" />
                <MenuItem text="None" />
              </Menu>
            }
            position={Position.TOP_RIGHT}
          >
            <Button icon="map-marker" text="Centering Type" minimal />
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
