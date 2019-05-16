import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { concatMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { ProductActionTypes, ProductActions } from './product.actions';


@Injectable()
export class ProductEffects {


  @Effect()
  loadProducts$ = this.actions$.pipe(
    ofType(ProductActionTypes.LoadProducts),
    /** An EMPTY observable only emits completion. Replace with your own observable API request */
    concatMap(() => EMPTY)
  );


  constructor(private actions$: Actions<ProductActions>) {}

}
