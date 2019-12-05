import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

const OpenStreetMap: React.FC = () => {
  const coords = useSelector((state: any) => state.maps.coords);
  const zoom = useSelector((state: any) => state.maps.zoom);

  const dispatch = useDispatch();

  return (
    <Map
      center={coords}
      zoom={zoom}
      // onClick={(e: any) =>
      //   dispatch({
      //     type: 'UPDATE_COORDS',
      //     payload: [e.latlng.lat, e.latlng.lng]
      //   })
      // }
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />

      {/* <Marker position={coords}> */}
      {/* <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup> */}
      {/* </Marker> */}
    </Map>
  );
};

export default OpenStreetMap;
