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
  // Dialog,
} from '@blueprintjs/core';
import {
  Mosaic,
  MosaicWindow,
  DEFAULT_CONTROLS_WITHOUT_CREATION,
} from 'react-mosaic-component';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import 'react-mosaic-component/react-mosaic-component.css';

import { ReactComponent as Logo } from './assets/logo.svg';
import { ReactComponent as OctoCat } from './assets/github.svg';

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

  const {
    activeLayout,
    isEmptyLayout,
    setLayout,
    availableLayouts,
    setLayoutAsPattern,
    customLayouts,
  } = useLayout();

  const { sync, setSyncType, dragEnabled, toggleDragLock } = useSettings();

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

          <Navbar.Divider />

          <Button
            icon="geolocation"
            onClick={getCurrentLocation}
            disabled={isEmptyLayout}
            minimal
          />
        </Navbar.Group>

        <Navbar.Group align={Alignment.RIGHT}>
          <Button
            icon={dragEnabled ? 'unlock' : 'lock'}
            onClick={toggleDragLock}
            disabled={isEmptyLayout}
            minimal
          />

          <Navbar.Divider />

          <Popover
            content={
              <Menu>
                {Object.keys(ELEMENT_MAP).map((map) => (
                  <MenuItem text={map} icon="send-to-map" key={map} />
                ))}
              </Menu>
            }
            position={Position.TOP}
          >
            <Button icon="map" text="Maps" disabled={!dragEnabled} minimal />
          </Popover>

          <Navbar.Divider />

          <Popover
            content={
              <Menu>
                {centeringModes.map((centeringMode) => (
                  <MenuItem
                    text={centeringMode}
                    icon="locate"
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
                    icon="page-layout"
                    key={name}
                    active={compareObjects(activeLayout, pattern)}
                    onClick={() => setLayout(pattern as any)}
                  />
                ))}

                {customLayouts &&
                  customLayouts.map(({ name, layout }: any) => (
                    <MenuItem
                      text={name}
                      icon="page-layout"
                      key={name}
                      active={compareObjects(activeLayout, layout)}
                      onClick={() => setLayout(layout as any)}
                    />
                  ))}

                <MenuItem
                  text="Save as Pattern"
                  icon="floppy-disk"
                  disabled={isEmptyLayout}
                  onClick={setLayoutAsPattern}
                />
              </Menu>
            }
            position={Position.TOP}
          >
            <Button icon="reset" disabled={!dragEnabled} minimal />
          </Popover>

          <Navbar.Divider />

          <a
            href="https://github.com/JB1905/map-comparificator"
            target="_blank"
            rel="noopener noreferrer"
          >
            <OctoCat className="octocat" />
          </a>
        </Navbar.Group>
      </Navbar>

      <div id="app">
        <Mosaic
          renderTile={(id: any, path: any) => (
            <MosaicWindow
              path={path}
              title={id}
              toolbarControls={
                dragEnabled ? DEFAULT_CONTROLS_WITHOUT_CREATION : []
              }
              draggable={dragEnabled}
            >
              {ELEMENT_MAP[id]}
            </MosaicWindow>
          )}
          initialValue={activeLayout}
          zeroStateView={
            <ErrorScreen
              title="No map preview selected"
              message="Select maps from the menu"
            />
          }
          resize={dragEnabled ? undefined : 'DISABLED'}
          onChange={(changedLayout) => setLayout(changedLayout)}
          className={`mosaic-blueprint-theme ${
            appearance === Theme.Dark ? Classes.DARK : ''
          }`}
        />
      </div>

      {/* <Dialog isOpen={true}>
        <p>hello</p>
      </Dialog> */}
    </div>
  );
};

export default App;
