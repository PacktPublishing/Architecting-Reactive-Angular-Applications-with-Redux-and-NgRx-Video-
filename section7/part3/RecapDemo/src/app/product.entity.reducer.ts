import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";
import { Product } from "./product";
import { ProductActions } from "./product.actions";
// import { createSelector, createFeatureSelector } from "@ngrx/store";

// create the type `State`
export interface State extends EntityState<Product> { }

// create an `adapter` instance
export const adapter: EntityAdapter<Product> = createEntityAdapter<Product>({});

// create an initial state that we assign to input parameter `state` in the reducer
export const initialState: State = adapter.getInitialState({});

export function productsReducer(state = initialState, action) {
  switch (action.type) {
    case ProductActions.ADD:
      return adapter.addOne(action.payload, state);
    case ProductActions.LOAD:
      return adapter.addAll(action.payload, state);
    case ProductActions.DELETE:
      return adapter.removeOne(action.payload.id, state);
    case ProductActions.UPDATE:
      return adapter.updateOne(action.payload, state);
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

// state.products.entities