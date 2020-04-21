import React from 'react';
import { Navbar, Classes } from '@blueprintjs/core';
import {
  Mosaic,
  MosaicWindow,
  MosaicBranch,
  DEFAULT_CONTROLS_WITHOUT_CREATION,
} from 'react-mosaic-component';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import 'react-mosaic-component/react-mosaic-component.css';

import { ELEMENT_MAP } from 'map';

import NavbarPrimaryGroup from 'containers/NavbarPrimaryGroup';
import NavbarSecondaryGroup from 'containers/NavbarSecondaryGroup';
import ErrorScreen from 'containers/ErrorScreen';

import { useTheme } from 'hooks/useTheme';
import { useLayout } from 'hooks/useLayout';
import { useSettings } from 'hooks/useSettings';

import { Theme } from 'enums/Theme';

const App: React.FC = () => {
  const { activeTheme } = useTheme();

  const { activeLayout, setLayout } = useLayout();

  const { customizationEnabled } = useSettings();

  const tileRenderer = (id: string, path: MosaicBranch[]) => (
    <MosaicWindow
      path={path}
      title={id}
      draggable={customizationEnabled}
      toolbarControls={
        customizationEnabled ? DEFAULT_CONTROLS_WITHOUT_CREATION : []
      }
    >
      {ELEMENT_MAP[id]}
    </MosaicWindow>
  );

  return (
    <div className={activeTheme === Theme.Dark ? Classes.DARK : ''}>
      <Navbar>
        <NavbarPrimaryGroup />

        <NavbarSecondaryGroup />
      </Navbar>

      <div id="app">
        <Mosaic
          resize={customizationEnabled ? undefined : 'DISABLED'}
          onChange={(changedLayout) => setLayout(changedLayout)}
          className={`mosaic-blueprint-theme ${
            activeTheme === Theme.Dark ? Classes.DARK : ''
          }`}
          renderTile={tileRenderer}
          initialValue={activeLayout}
          zeroStateView={
            <ErrorScreen
              title="No map preview selected"
              message="Select maps from the menu"
            />
          }
        />
      </div>
    </div>
  );
};

export default App;
