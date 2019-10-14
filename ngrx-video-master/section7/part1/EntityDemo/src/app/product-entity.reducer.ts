import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";
import { Product } from "./product";
import { createSelector, createFeatureSelector } from "@ngrx/store";

export interface State extends EntityState<Product> {
}

export const adapter: EntityAdapter<Product> = createEntityAdapter<Product>({});

export const initialState: State = adapter.getInitialState({});

export function ProductsReducer(state = initialState, action) {
  switch (action.type) {
    case "[Product] Add":
      return adapter.addOne(action.payload, state);
    case "[Product] Remove":
      return adapter.removeOne(action.payload.id, state);
    case "[Product] Load":
      return adapter.addAll(action.payload, state);
    default:
      return state;
  }
}

export const {
  selectAll,
  selectIds,
  selectTotal
} = adapter.getSelectors();

