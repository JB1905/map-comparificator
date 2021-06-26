import { Button, Menu, MenuItem } from '@blueprintjs/core';
import { Popover2 } from '@blueprintjs/popover2';
import { useTranslation } from 'react-i18next';

import { useLayout } from 'hooks/useLayout';
import { useCustomization } from 'hooks/useCustomization';

import { MAPS } from 'constants/collections/maps';

const MapSuppliers = () => {
  const { activeLayout, openLayoutWindow } = useLayout();

  const { isCustomizationEnabled } = useCustomization();

  const { t } = useTranslation();

  return (
    <Popover2
      disabled={!isCustomizationEnabled}
      content={
        <Menu>
          {Object.keys(MAPS).map((map) => (
            <MenuItem
              text={map}
              icon="send-to-map"
              key={map}
              disabled={JSON.stringify(activeLayout).includes(map)}
              onClick={() => openLayoutWindow(map)}
            />
          ))}
        </Menu>
      }
    >
      <Button
        icon="map"
        text={t('settings.maps')}
        disabled={!isCustomizationEnabled}
        minimal
      />
    </Popover2>
  );
};

export default MapSuppliers;
