import { Action } from '@ngrx/store';

export enum ProductActionTypes {
  LoadProducts = '[Product] Load Products',
  
  
}

export class LoadProducts implements Action {
  readonly type = ProductActionTypes.LoadProducts;
}


export type ProductActions = LoadProducts;
