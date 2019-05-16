import { Action } from '@ngrx/store';

import { Product } from './product';

export enum ProductActionTypes {
  Create = '[Product] Create',
  Update = '[Product] Update',
  Delete = '[Product] Delete',
  Get = '[Product] Get',
}

export class CreateProductAction implements Action {
  type: ProductActionTypes.Create;
  constructor( public payload: Product) {}
}

// example
// const createAction = new CreateProductAction('product');

export class UpdateProductAction implements Action {
  type: ProductActionTypes.Update;
  constructor(public payload: Product) { }
}

export class DeleteProductAction implements Action {
  type: ProductActionTypes.Delete;
  constructor(public payload: Product) { }
}

export class GetProductAction implements Action {
  // payload?: Product;
  type: ProductActionTypes.Get;
}

export type ProductActionUnion = CreateProductAction | 
UpdateProductAction |
DeleteProductAction |
GetProductAction;