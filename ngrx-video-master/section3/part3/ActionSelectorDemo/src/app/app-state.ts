import { Product } from './product';
import { Item } from './item';

export interface AppState {
  products: Array<Product>;
  items: Array<Item>;
}