import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import HEREMap from '@impargo/react-here-maps';

const HereMaps: React.FC = () => {
  const coords = useSelector((state: any) => state.maps.coords);

  const dispatch = useDispatch();

  // return <HEREMap appId="{your app_id}"
  //         appCode="{your app_code}"
  //         center={{ lat: coords[0], lng: coords[1] }}
  //         zoom={14}/>;

  return null;
};

export default HereMaps;
