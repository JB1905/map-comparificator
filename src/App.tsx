import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Mosaic, MosaicWindow } from 'react-mosaic-component';
import {
  Alignment,
  // Button,
  Navbar,
  NavbarDivider,
  NavbarGroup,
  NavbarHeading
  // RadioGroup,
  // Radio
} from '@blueprintjs/core';
import 'react-mosaic-component/react-mosaic-component.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';

import AppleMaps from './screens/Apple';
import BingMaps from './screens/Bing';
import GoogleMaps from './screens/Google';
import HereMaps from './screens/Here';
import OpenStreetMap from './screens/OSM';

import './App.scss';

const App = () => {
  const dispatch = useDispatch();

  const submit = () => {
    dispatch({ type: 'SEARCH', payload: '' });
  };

  const tileRenderer = (id: any, path: any) => {
    const ELEMENT_MAP: { [viewId: string]: JSX.Element } = {
      'Apple Maps': <AppleMaps />,
      'Bing Maps': <BingMaps />,
      'Google Maps': <GoogleMaps />,
      'Here Maps': <HereMaps />,
      'Open Street Map': <OpenStreetMap />
    };

    return (
      <MosaicWindow path={path} title={id}>
        {ELEMENT_MAP[id]}
      </MosaicWindow>
    );
  };

  const initialLayoutValue = {
    direction: 'row',
    first: {
      direction: 'row',
      first: 'Apple Maps',
      second: {
        direction: 'row',
        first: 'Bing Maps',
        second: 'Google Maps'
      },
      splitPercentage: 33
    },
    second: {
      direction: 'row',
      first: 'Here Maps',
      second: 'Open Street Map'
    },
    splitPercentage: 60,
    currentTheme: 'mosaic-blueprint-theme'
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

          {/* <NavbarDivider /> */}

          {/* <RadioGroup
            // label="Meal Choice"
            onChange={() => null}
            inline
            // selectedValue={() => null}
          >
            <Radio label="Center" value="center" />
            <Radio label="Fit" value="fit" />
            <Radio label="None" value="none" />
          </RadioGroup> */}

          {/* <Button className="bp3-minimal" icon="home" text="Home" />
          <Button className="bp3-minimal" icon="document" text="Files" /> */}
        </NavbarGroup>
      </Navbar>

      <div id="app">
        <Mosaic
          renderTile={tileRenderer}
          initialValue={initialLayoutValue}
          zeroStateView={<div />}
        />
      </div>
    </div>
  );
};

export default App;
