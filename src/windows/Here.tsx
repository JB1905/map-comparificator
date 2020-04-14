import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import HEREMap from '@impargo/react-here-maps';

import { HereMapsAppId, HereMapsAppCode } from '../config';

import { RootState } from '../reducers';

const HereMaps: React.FC = () => {
  const { coords, zoomLevel } = useSelector((state: RootState) => state.maps);

  const dispatch = useDispatch();

  // return (
  //   <HEREMap
  //     appId={HereMapsAppId}
  //     appCode={HereMapsAppCode}
  //     center={{ lat: coords[0], lng: coords[1] }}
  //     zoom={zoomLevel}
  //   />
  // );

  return null;
};

export default HereMaps;
