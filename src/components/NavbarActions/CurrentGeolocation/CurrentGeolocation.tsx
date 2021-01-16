import { Button } from '@blueprintjs/core';
import { useHotkeys } from 'react-hotkeys-hook';

import { useGeolocation } from 'hooks/useGeolocation';
import { useMaps } from 'hooks/useMaps';
import { useLayout } from 'hooks/useLayout';

import { KeyboardShortcut } from 'enums/KeyboardShortcut';

const CurrentGeolocation = () => {
  const { getGeolocation } = useGeolocation();

  const { setCoords } = useMaps();

  const { isEmptyLayout } = useLayout();

  const getCurrentLocation = () => {
    getGeolocation(({ latitude, longitude }) => {
      setCoords([latitude, longitude]);
    });
  };

  useHotkeys(KeyboardShortcut.Geolocation, getCurrentLocation);

  return (
    <Button
      icon="geolocation"
      onClick={getCurrentLocation}
      disabled={isEmptyLayout}
      minimal
    />
  );
};

export default CurrentGeolocation;
