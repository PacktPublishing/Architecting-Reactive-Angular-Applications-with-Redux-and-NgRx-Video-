import { State as ProductsState } from "./products.reducer";

export interface AppState {
  counter;
  products: ProductsState;
  customers;
}
