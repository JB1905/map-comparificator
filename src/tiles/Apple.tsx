import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Map } from 'react-mapkit';

import { appleMapsToken } from '../config';

const AppleMaps: React.FC = () => {
  const { coords, zoom } = useSelector((state: any) => state.maps);

  // console.log(coords);

  const dispatch = useDispatch();

  return <Map tokenOrCallback={appleMapsToken} center={coords} />;
};

export default AppleMaps;
