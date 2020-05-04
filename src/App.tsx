import React, { useState, useEffect } from 'react';
import { Navbar, NonIdealState, Classes } from '@blueprintjs/core';
import {
  Mosaic,
  MosaicWindow,
  MosaicBranch,
  DEFAULT_CONTROLS_WITHOUT_CREATION,
} from 'react-mosaic-component';
import { Helmet } from 'react-helmet';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import 'react-mosaic-component/react-mosaic-component.css';

import { ELEMENT_MAP } from 'map';

import NavbarPrimaryGroup from 'containers/NavbarPrimaryGroup';
import NavbarSecondaryGroup from 'containers/NavbarSecondaryGroup';

import { useTheme } from 'hooks/useTheme';
import { useLayout } from 'hooks/useLayout';
import { useSettings } from 'hooks/useSettings';

const MobileSplash: React.FC = () => (
  <NonIdealState
    icon="zoom-to-fit"
    title="Your screen is too small"
    description="Open app in bigger window"
    className="device-not-supported"
  />
);

const App: React.FC = () => {
  const { isDark } = useTheme();

  const { activeLayout, setActiveLayout } = useLayout();

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

  const [initialVw, setInitialVw] = useState<number>();
  const [vw, setVw] = useState<number>();

  useEffect(() => {
    setInitialVw(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setVw(window.innerWidth);

      if (vw! >= 860) {
        setInitialVw(vw);
      }
    });

    setVw(window.innerWidth);
  }, [vw]);

  /**
   * Disable Mosaic rendering on mobile devices
   * Exclude resized window to avoid rerenderings
   */

  return (
    <>
      <Helmet>
        <body className={themeClass} />
      </Helmet>

      {vw! < 860 && initialVw! < 860 ? (
        <MobileSplash />
      ) : (
        <div className="layout-container">
          <div className="desktop-layout">
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
          </div>

          <MobileSplash />
        </div>
      )}
    </>
  );
};

export default App;
