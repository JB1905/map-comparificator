import { useCallback, useMemo } from 'react';
import { Navbar, NonIdealState, Classes } from '@blueprintjs/core';
import {
  Mosaic,
  MosaicWindow,
  MosaicBranch,
  DEFAULT_CONTROLS_WITHOUT_CREATION,
} from 'react-mosaic-component';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { useHotkeys } from 'react-hotkeys-hook';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import 'react-mosaic-component/react-mosaic-component.css';

import { MAPS } from 'constants/collections/maps';

import RootModal from 'components/RootModal';
import NavbarPrimaryGroup from 'components/NavbarPrimaryGroup';
import NavbarSecondaryGroup from 'components/NavbarSecondaryGroup';

import { useTheme } from 'hooks/useTheme';
import { useSupportedScreenSize } from 'hooks/useSupportedScreenSize';
import { useLayout } from 'hooks/useLayout';
import { useCustomization } from 'hooks/useCustomization';

import { KeyboardShortcut } from 'constants/KeyboardShortcut';

type TileRendererCallback = (id: string, path: MosaicBranch[]) => JSX.Element;

const App = () => {
  const { isDark } = useTheme();

  const isSupportedScreenSize = useSupportedScreenSize();

  const { activeLayout, setActiveLayout, clearLayout } = useLayout();

  const { isCustomizationEnabled } = useCustomization();

  const { t, i18n } = useTranslation();

  useHotkeys(
    KeyboardShortcut.CloseAll,
    () => (isCustomizationEnabled ? clearLayout() : undefined),
    [isCustomizationEnabled]
  );

  const themeClassName = useMemo(() => (isDark ? Classes.DARK : ''), [isDark]);

  const tileRenderer = useCallback<TileRendererCallback>(
    (id, path) => (
      <MosaicWindow
        path={path}
        title={id}
        draggable={isCustomizationEnabled}
        toolbarControls={
          isCustomizationEnabled ? DEFAULT_CONTROLS_WITHOUT_CREATION : []
        }
      >
        {MAPS[id]}
      </MosaicWindow>
    ),
    [isCustomizationEnabled]
  );

  return (
    <>
      {/* TODO move to HEAD component */}
      <Helmet>
        <html lang={i18n.language} />
        <meta name="description" content={t('app.description')} />
        <body className={themeClassName} />
      </Helmet>

      <Navbar className="app-navbar">
        <NavbarPrimaryGroup />
        <NavbarSecondaryGroup />
      </Navbar>

      {isSupportedScreenSize ? (
        // TODO separate component
        <>
          <Mosaic
            resize={isCustomizationEnabled ? undefined : 'DISABLED'}
            onChange={(changedLayout) => setActiveLayout(changedLayout)}
            className={`mosaic-blueprint-theme ${themeClassName}`}
            renderTile={tileRenderer}
            initialValue={activeLayout}
            zeroStateView={
              <NonIdealState
                icon="map"
                title={t('noMapPreview.title')}
                description={t<string>('noMapPreview.description')}
              />
            }
          />

          <RootModal />
        </>
      ) : (
        // TODO separate component
        <NonIdealState
          icon="zoom-to-fit"
          title={t('screenNotSupported.title')}
          description={t<string>('screenNotSupported.description')}
          className="not-supported-screen-size"
        />
      )}
    </>
  );
};

export default App;
