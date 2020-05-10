import React from 'react';
import { Navbar, NonIdealState, Classes } from '@blueprintjs/core';
import {
  Mosaic,
  MosaicWindow,
  MosaicBranch,
  DEFAULT_CONTROLS_WITHOUT_CREATION,
} from 'react-mosaic-component';
import { Helmet } from 'react-helmet';
import { useViewport } from 'react-viewport-hooks';
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

  const { activeLayout, setActiveLayout } = useLayout();

  const { isCustomizationEnabled } = useSettings();

  const { vw } = useViewport();

  const themeClass = isDark ? Classes.DARK : '';

  if (vw < 860) {
    return (
      <NonIdealState
        icon="zoom-to-fit"
        title="Your screen is too small"
        description="Open app in bigger window"
        className="device-not-supported"
      />
    );
  }

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

  return (
    <>
      <Helmet>
        <body className={themeClass} />
      </Helmet>

      <Navbar>
        <NavbarPrimaryGroup />

        <NavbarSecondaryGroup />
      </Navbar>

      <Mosaic
        resize={isCustomizationEnabled ? undefined : 'DISABLED'}
        onChange={(changedLayout) => setActiveLayout(changedLayout)}
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
    </>
  );
};

export default App;
