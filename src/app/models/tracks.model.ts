import { ItemModel } from './item.model';

export interface TracksModel {
  href: string;
  items: ItemModel[];
  limit: number;
  next?: any;
  offset: number;
  previous?: any;
  total: number;
}
