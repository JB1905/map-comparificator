import React from 'react';
import { useDispatch } from 'react-redux';
import {
  Alignment,
  Navbar,
  NavbarDivider,
  NavbarGroup,
  NavbarHeading,
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

import { initialLayout } from './constants/initialLayout';

import { SEARCH } from './actions';

import './App.scss';

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

  const submit = () => {
    dispatch({ type: SEARCH, payload: '' });
  };

  return (
    <div>
      <Navbar>
        <NavbarGroup align={Alignment.LEFT}>
          <NavbarHeading>Map Comparificator</NavbarHeading>

          <NavbarDivider />

          <input
            className="bp3-input"
            placeholder="Search..."
            type="text"
            onKeyDown={submit}
          />
        </NavbarGroup>
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
