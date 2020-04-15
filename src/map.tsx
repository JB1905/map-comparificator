import React, { lazy } from 'react';
import { LazyComponent } from './components/LazyComponent';

const AppleMaps = lazy(() => import('./windows/Apple'));
const BingMaps = lazy(() => import('./windows/Bing'));
const GoogleMaps = lazy(() => import('./windows/Google'));
const HereMaps = lazy(() => import('./windows/Here'));
const MapBox = lazy(() => import('./windows/MapBox'));
const OpenStreetMap = lazy(() => import('./windows/OSM'));

export const ELEMENT_MAP: { [viewId: string]: JSX.Element } = {
  'Apple Maps': <LazyComponent component={<AppleMaps />} />,
  'Bing Maps': <LazyComponent component={<BingMaps />} />,
  'Google Maps': <LazyComponent component={<GoogleMaps />} />,
  'Here Maps': <LazyComponent component={<HereMaps />} />,
  MapBox: <LazyComponent component={<MapBox />} />,
  'Open Street Map': <LazyComponent component={<OpenStreetMap />} />,
};
