import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ReactBingmaps } from 'react-bingmaps-plus';

import { bingMapsToken } from '../config';

import { RootState } from '../reducers';

const BingMaps: React.FC = () => {
  const { coords, zoom } = useSelector((state: RootState) => state.maps);

  const dispatch = useDispatch();

  return (
    <ReactBingmaps bingmapKey={bingMapsToken} center={coords} zoom={zoom} />
  );
};

export default BingMaps;
