import { MosaicParent } from 'react-mosaic-component';

export type Layout = string | MosaicParent<string> | null;

// TODO move to interfaces
export interface CustomLayout {
  readonly name: string;
  readonly layout: Layout;
};
