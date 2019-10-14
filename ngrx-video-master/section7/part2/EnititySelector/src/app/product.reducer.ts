import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";
import { Product } from "./product";
import { createSelector, createFeatureSelector } from "@ngrx/store";

export interface State extends EntityState<Product> {}

export const adapter: EntityAdapter<Product> = createEntityAdapter<Product>({});

export const initialState: State = adapter.getInitialState({});

export function productsReducer(state = initialState, action) {
  switch (action.type) {
    case "[Products] add":
      return adapter.addOne(action.payload, state);
    default:
      return state;
  }
}

export const { 
  selectAll,
  selectEntities,
  selectIds,
  selectTotal
} = adapter.getSelectors();

// rawest form state.products.entities
export const selectProducts = createSelector(
  (state: any) => state.products,
  selectAll
);

// with createFeatureSelector
const productsSelector = createFeatureSelector('products');
export const selectProductsAlt = createSelector(
  productsSelector,
  selectAll
);

// home cooked
const homeCookedSelectAll = (products: any) => Object.keys(products.entities).map(key => products.entities[key]);

export const homeCooked = createSelector(
  (state: any) => state.products,
  homeCookedSelectAll
);
