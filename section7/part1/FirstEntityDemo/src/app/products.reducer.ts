import { EntityAdapter, createEntityAdapter, EntityState } from '@ngrx/entity';

import { Product } from './product';

export interface State extends EntityState<Product> { }

export const adapter: EntityAdapter<Product> = createEntityAdapter<Product>({});

export const initialState: State = adapter.getInitialState({});

export function productsReducer(state = initialState, action) {
  switch (action.type) {
    case '[Products] add':
      return adapter.addOne(action.payload, state); 
    case '[Products] remove':
      return adapter.removeOne(action.payload.id, state);
    case '[Products] load':
      return adapter.addAll(action.payload, state);
    case '[Products] update':
      return adapter.updateOne(action.payload, state);
    default:
      return state;
  }
}