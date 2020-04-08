import React from 'react';
import { useDispatch } from 'react-redux';
import {
  Alignment,
  Navbar,
  Button,
  Popover,
  Menu,
  Position,
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

import { initialLayout } from './constants/initialLayout';

import { SEARCH, UPDATE_COORDS } from './actions';

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

  return (
    <div>
      <Navbar>
        <Navbar.Group align={Alignment.LEFT}>
          <Navbar.Heading>Map Comparificator</Navbar.Heading>

          <Navbar.Divider />

          <Popover content={<Menu></Menu>} position={Position.TOP}>
            <Button icon="map" text="Maps" />
          </Popover>

          <input
            className="bp3-input"
            placeholder="Search..."
            type="text"
            onChange={submit}
            // onKeyDown={submit}
          />

          <Button icon="geolocation" onClick={getLocalForecast} />
          <Button icon="moon" onClick={() => null} />
          {/* <Button icon="compass" onClick={() => null} /> */}

          <Popover
            content={<Menu>Center/Fill/None</Menu>}
            position={Position.TOP}
          >
            <Button icon="map-marker" text="Centering Type" />
          </Popover>
        </Navbar.Group>
      </Navbar>

      <div id="app">
        <Mosaic
          renderTile={tileRenderer}
          initialValue={initialLayout}
          zeroStateView={<div />}
        />
      </div>
    </div>
  );
};

export default App;
