import { MapContainer, TileLayer, useMapEvents } from 'react-leaflet';
import { Helmet } from 'react-helmet';

import { useMaps } from 'hooks/useMaps';

import './OSM.scss';

const MapComponent = () => {
  const { setCoords, setZoomLevel } = useMaps();

  const map = useMapEvents({
    zoom: () => setZoomLevel(map.getZoom()),
    drag: () => {
      const { lat, lng } = map.getCenter();

      setCoords([lat, lng]);
    },
  });

  return null;
};

const OpenStreetMap = () => {
  const { coords, zoomLevel } = useMaps();

  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/leaflet.css"
        />
      </Helmet>

      <MapContainer center={coords} zoom={zoomLevel}>
        <MapComponent />

        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
      </MapContainer>
    </>
  );
};

// TODO
export default OpenStreetMap;
