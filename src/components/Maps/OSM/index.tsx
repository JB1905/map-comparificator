import React from 'react';
import { Map, TileLayer, Viewport } from 'react-leaflet';
import { Helmet } from 'react-helmet';

import { useMaps } from 'hooks/useMaps';

import './OSM.scss';

const OpenStreetMap = () => {
  const { coords, zoomLevel, setCoords, setZoomLevel } = useMaps();

  const handleViewportChange = (e: Viewport) => {
    setCoords(e.center!);

    setZoomLevel(e.zoom!);
  };

  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.6.0/leaflet.css"
        />
      </Helmet>

      <Map
        center={coords}
        zoom={zoomLevel}
        animate={false}
        onViewportChange={handleViewportChange}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
      </Map>
    </>
  );
};

export default OpenStreetMap;
