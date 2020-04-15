import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ReactBingmaps } from 'react-bingmaps-plus';

import { RootState } from '../reducers';

const BingMaps: React.FC = () => {
  const { coords, zoomLevel } = useSelector((state: RootState) => state.maps);

  const dispatch = useDispatch();

  return (
    <ReactBingmaps
      bingmapKey={process.env.REACT_APP_BING_MAPS_TOKEN}
      center={coords}
      zoom={zoomLevel}
    />
  );
};

export default BingMaps;
