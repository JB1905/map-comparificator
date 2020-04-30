import React from 'react';
import { Map } from 'react-mapkit';

import { useMaps } from 'hooks/useMaps';

const AppleMaps: React.FC = () => {
  const {
    coords,
    // zoomLevel
  } = useMaps();

  return (
    <Map
      tokenOrCallback={process.env.REACT_APP_APPLE_MAPS_TOKEN}
      center={coords}
      // region={{
      //   latitude: 50,
      //   longitude: 20,
      //   latitudeSpan: 0.5,
      //   longitudeSpan: 0.5,
      // }}
    />
  );
};

export default AppleMaps;
