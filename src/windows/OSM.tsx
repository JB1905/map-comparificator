import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Map, TileLayer } from 'react-leaflet';

import { RootState } from '../reducers';

const OpenStreetMap: React.FC = () => {
  const { coords, zoom } = useSelector((state: RootState) => state.maps);

  const dispatch = useDispatch();

  return (
    <Map center={coords} zoom={zoom}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
    </Map>
  );
};

export default OpenStreetMap;
