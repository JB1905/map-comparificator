import { Navbar, NonIdealState, Classes } from '@blueprintjs/core';
import {
  Mosaic,
  MosaicWindow,
  MosaicBranch,
  DEFAULT_CONTROLS_WITHOUT_CREATION,
} from 'react-mosaic-component';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { useViewport } from 'react-viewport-hooks';
import { useHotkeys } from 'react-hotkeys-hook';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import 'react-mosaic-component/react-mosaic-component.css';

import { MAPS } from 'collections/maps';

import RootModal from 'components/RootModal';
import NavbarPrimaryGroup from 'components/NavbarPrimaryGroup';
import NavbarSecondaryGroup from 'components/NavbarSecondaryGroup';

import { useTheme } from 'hooks/useTheme';
import { useLayout } from 'hooks/useLayout';
import { useCustomization } from 'hooks/useCustomization';

import { KeyboardShortcut } from 'enums/KeyboardShortcut';

const MIN_WINDOW_SIZE = 960;

const App = () => {
  const { isDark } = useTheme();

  const { activeLayout, setActiveLayout, clearLayout } = useLayout();

  const { isCustomizationEnabled } = useCustomization();

  const { t, i18n } = useTranslation();

  const { vw } = useViewport({
    defaultVW: window.innerWidth,
  });

  useHotkeys(
    KeyboardShortcut.CloseAll,
    () => (isCustomizationEnabled ? clearLayout() : undefined),
    [isCustomizationEnabled]
  );

  const themeClassNsme = isDark ? Classes.DARK : '';

  const tileRenderer = (id: string, path: MosaicBranch[]) => (
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
  );

  return (
    <>
      <Helmet>
        <html lang={i18n.language} />

        <meta name="description" content={t('app.description')} />

        <body className={themeClassNsme} />
      </Helmet>

      {vw > MIN_WINDOW_SIZE ? (
        <>
          <Navbar>
            <NavbarPrimaryGroup />

            <NavbarSecondaryGroup />
          </Navbar>

          <Mosaic
            resize={isCustomizationEnabled ? undefined : 'DISABLED'}
            onChange={(changedLayout) => setActiveLayout(changedLayout)}
            className={`mosaic-blueprint-theme ${themeClassNsme}`}
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
