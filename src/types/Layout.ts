import { MosaicParent } from 'react-mosaic-component';

export type Layout = string | MosaicParent<string> | null;

export interface CustomLayout {
  readonly name: string;
  readonly layout: Layout;
}
