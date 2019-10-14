import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';

interface Product {
  id: number;
  name: string;
}

function cartReducer(state = {}, action) {
  switch (action.type) {
    default:
      return state;
  }
}

function productsReducer(state:Product[] = [], action) {
  switch (action.type) {
    default:
      return state;
  }
}

export interface State {
  products: Product[]
}

export const reducers: ActionReducerMap<State> = {
  products: productsReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
