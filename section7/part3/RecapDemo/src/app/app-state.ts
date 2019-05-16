import { State as ProductsState } from "./product.entity.reducer";

export interface AppState {
  products: ProductsState;
  customers: [];
}