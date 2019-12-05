import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ReactBingmaps } from 'react-bingmaps-plus';

const BingMaps: React.FC = () => {
  const coords = useSelector((state: any) => state.maps.coords);

  const dispatch = useDispatch();

  return <ReactBingmaps bingmapKey="[YourBingMapsKey]"></ReactBingmaps>;
};

export default BingMaps;
