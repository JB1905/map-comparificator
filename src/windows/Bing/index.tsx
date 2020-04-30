import React from 'react';
import { ReactBingmaps } from 'react-bingmaps-plus';

import { useMaps } from 'hooks/useMaps';

const BingMaps: React.FC = () => {
  const { coords, zoomLevel } = useMaps();

  return (
    <ReactBingmaps
      bingmapKey={process.env.REACT_APP_BING_MAPS_TOKEN}
      center={coords}
      zoom={zoomLevel}
    />
  );
};

export default BingMaps;
