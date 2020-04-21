import React from 'react';
import { useSelector } from 'react-redux';
import { Map, TileLayer, Viewport } from 'react-leaflet';

import { useGeolocation } from 'hooks/useGeolocation';

import { RootState } from 'reducers';

const OpenStreetMap: React.FC = () => {
  const { coords, zoomLevel } = useSelector((state: RootState) => state.maps);

  const { setCoords, setZoomLevel } = useGeolocation();

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
