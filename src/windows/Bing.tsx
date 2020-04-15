import React from 'react';
import { useSelector } from 'react-redux';
import { ReactBingmaps } from 'react-bingmaps-plus';

import { RootState } from '../reducers';

const BingMaps: React.FC = () => {
  const { coords, zoomLevel } = useSelector((state: RootState) => state.maps);

  return (
    <ReactBingmaps
      bingmapKey={process.env.REACT_APP_BING_MAPS_TOKEN}
      center={coords}
      zoom={zoomLevel}
    />
  );
};

export default BingMaps;
