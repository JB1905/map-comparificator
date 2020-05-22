import { MosaicParent } from 'react-mosaic-component';

export type Layout = string | MosaicParent<string> | null;

export type CustomLayout = {
  readonly name: string;
  readonly layout: Layout;
};
