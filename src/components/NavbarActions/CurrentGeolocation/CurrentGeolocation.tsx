import { Button, useHotkeys } from '@blueprintjs/core';
import { useCallback, useMemo } from 'react';

import { useGeolocation } from 'hooks/useGeolocation';
import { useMaps } from 'hooks/useMaps';
import { useLayout } from 'hooks/useLayout';

import { KeyboardShortcut } from 'enums/KeyboardShortcut';

const CurrentGeolocation = () => {
  const { getGeolocation } = useGeolocation();

  const { setCoords } = useMaps();

  const { isEmptyLayout } = useLayout();

  const getCurrentLocation = useCallback(() => {
    getGeolocation(({ latitude, longitude }) => {
      setCoords([latitude, longitude]);
    });
  }, [getGeolocation, setCoords]);

  const hotkeys = useMemo(
    () => [
      {
        combo: KeyboardShortcut.Geolocation,
        global: true,
        label: '', // TODO translate
        onKeyDown: getCurrentLocation,
      },
    ],
    [getCurrentLocation]
  );

  useHotkeys(hotkeys);

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
