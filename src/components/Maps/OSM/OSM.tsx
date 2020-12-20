import { MapContainer, TileLayer, useMap, useMapEvents } from 'react-leaflet';
import { Helmet } from 'react-helmet';

import { useMaps } from 'hooks/useMaps';

import './OSM.scss';

const MapComponent = () => {
  // const map = useMap()

  // console.log(map.getZoom());
  // console.log(map.getCenter());

  const map = useMapEvents({
    click: () => {
      map.locate();
    },
    locationfound: (location) => {
      console.log('location found:', location);
    },
    zoom: (e) => {
      console.log(e.target);
    },
    // zoomlevelschange: (e) => {
    //   console.log(e);

    // },
    drag: (e) => {
      console.log(e.target);
    },
  });

  console.log(map);

  return null;
};

const OpenStreetMap = () => {
  const { coords, zoomLevel, setCoords, setZoomLevel } = useMaps();

  // TODO
  // const handleViewportChange = (e: Viewport) => {
  //   setCoords(e.center!);

  //   setZoomLevel(e.zoom!);
  // };

  // useMapEvents({
  //   drag: () => {
  //     console.log('aaa');

  //   },
  //   zoomlevelschange: (e) => {
  //     console.log(e)
  //   }
  // })

  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/leaflet.css"
        />
      </Helmet>

      <MapContainer
        center={coords}
        zoom={zoomLevel}
        // eventHandlers={{
        //   click: (e) => alert(e)
        // }}
        // TODO
        // animate={false}

        // onViewportChange={handleViewportChange}
      >
        <MapComponent />

        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
      </MapContainer>
    </>
  );
};

export default OpenStreetMap;
