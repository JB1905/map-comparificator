import React from 'react';
import { Map, TileLayer, Viewport } from 'react-leaflet';

import { useMaps } from 'hooks/useMaps';

import './OSM.scss';

const OpenStreetMap: React.FC = () => {
  const { coords, zoomLevel, setCoords, setZoomLevel } = useMaps();

  const onViewportChange = (e: Viewport) => {
    setCoords(e.center!);

    setZoomLevel(e.zoom!);
  };

  return (
    <Map
      center={coords}
      zoom={zoomLevel}
      animate={false}
      onViewportChange={onViewportChange}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
    </Map>
  );
};

export default OpenStreetMap;
