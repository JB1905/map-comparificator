import React from 'react';
import { Navbar, NonIdealState, Classes } from '@blueprintjs/core';
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

import { useTheme } from 'hooks/useTheme';
import { useLayout } from 'hooks/useLayout';
import { useSettings } from 'hooks/useSettings';

const App: React.FC = () => {
  const { isDark } = useTheme();

  const { activeLayout, setLayout } = useLayout();

  const { isCustomizationEnabled } = useSettings();

  const themeClass = isDark ? Classes.DARK : '';

  const tileRenderer = (id: string, path: MosaicBranch[]) => (
    <MosaicWindow
      path={path}
      title={id}
      draggable={isCustomizationEnabled}
      toolbarControls={
        isCustomizationEnabled ? DEFAULT_CONTROLS_WITHOUT_CREATION : []
      }
    >
      {ELEMENT_MAP[id]}
    </MosaicWindow>
  );

  /**
   * Disable Mosaic rendering on mobile devices
   * Exclude resized window to avoid rerenderings
   */

  return (
    <div id="page" className={themeClass}>
      <Navbar>
        <NavbarPrimaryGroup />

        <NavbarSecondaryGroup />
      </Navbar>

      <Mosaic
        resize={isCustomizationEnabled ? undefined : 'DISABLED'}
        onChange={(changedLayout) => setLayout(changedLayout)}
        className={`mosaic-blueprint-theme ${themeClass}`}
        renderTile={tileRenderer}
        initialValue={activeLayout}
        zeroStateView={
          <NonIdealState
            icon="map"
            title="No map preview selected"
            description="Select maps from the menu"
          />
        }
      />
    </div>
  );
};

export default App;
