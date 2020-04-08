import React from 'react';
import { MosaicWindow } from 'react-mosaic-component';

import { ELEMENT_MAP } from './map';

export const tileRenderer = (id: any, path: any) => (
  <MosaicWindow path={path} title={id}>
    {ELEMENT_MAP[id]}
  </MosaicWindow>
);
