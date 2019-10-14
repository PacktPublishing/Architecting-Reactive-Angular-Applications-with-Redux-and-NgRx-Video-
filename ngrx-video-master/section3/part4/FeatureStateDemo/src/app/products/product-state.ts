import { Product } from './product';

export interface ProductState {
  list: Array<Product>;
  selectedProduct: Product;
}