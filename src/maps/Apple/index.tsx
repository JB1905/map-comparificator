import React from 'react';
import { Map } from 'react-mapkit';

import { useMaps } from 'hooks/useMaps';

const AppleMaps: React.FC = () => {
  const { coords } = useMaps();

  return (
    <Map
      data-testid="apple-maps"
      tokenOrCallback={process.env.REACT_APP_APPLE_MAPS_TOKEN}
      center={coords}
    />
  );
};

export default AppleMaps;
