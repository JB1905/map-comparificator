import React from 'react';
import { useSelector } from 'react-redux';
import { Map, TileLayer } from 'react-leaflet';

import { useGeolocation } from '../hooks/useGeolocation';

import { RootState } from '../reducers';

const OpenStreetMap: React.FC = () => {
  const { coords, zoomLevel } = useSelector((state: RootState) => state.maps);

  const { setCoords, setZoomLevel } = useGeolocation();

  return (
    <Map
      center={coords}
      zoom={zoomLevel}
      animate={false}
      onViewportChange={(e) => {
        setCoords(e.center!);

        setZoomLevel(e.zoom!);
      }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        on
      />
    </Map>
  );
};

export default OpenStreetMap;
