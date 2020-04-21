import React from 'react';
import { useSelector } from 'react-redux';
import HEREMap from '@impargo/react-here-maps';

import { RootState } from 'reducers';

const HereMaps: React.FC = () => {
  const { coords, zoomLevel } = useSelector((state: RootState) => state.maps);

  // return (
  //   <HEREMap
  //     appId={process.env.REACT_APP_HERE_MAPS_APP_ID}
  //     appCode={process.env.REACT_APP_HERE_MAPS_APP_CODE}
  //     center={{ lat: coords[0], lng: coords[1] }}
  //     zoom={zoomLevel}
  //   />
  // );

  return null;
};

export default HereMaps;
