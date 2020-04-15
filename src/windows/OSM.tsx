import React from 'react';
import { useSelector } from 'react-redux';
import { Map, TileLayer } from 'react-leaflet';

import { RootState } from '../reducers';

const OpenStreetMap: React.FC = () => {
  const { coords, zoomLevel } = useSelector((state: RootState) => state.maps);

  return (
    <Map center={coords} zoom={zoomLevel} animate={false}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
    </Map>
  );
};

export default OpenStreetMap;
