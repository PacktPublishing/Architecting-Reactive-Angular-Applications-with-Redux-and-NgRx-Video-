import { Injectable } from "@angular/core";
import { Actions, ofType, Effect } from '@ngrx/effects';
import { tap, switchMap, map, catchError, concatMap } from 'rxjs/operators';
import { ProductsService } from "./products.service";
import { of } from "rxjs";

@Injectable()
export class ProductsEffects {
  @Effect({ dispatch: false}) saveProducts$ = this.actions$.pipe(
    ofType('SAVE_PRODUCTS'),
    concatMap((action) => this.srv.saveProducts(action)),
    tap((arg) => console.log(arg))
  )
 
  @Effect() products$ = this.actions$.pipe(
    ofType('FETCH_PRODUCTS'),
    switchMap(() => this.srv.getProducts().pipe(
      map(products => ({ type: "LOAD_PRODUCTS", payload: products })),
      catchError(err => this.handleError(err))
  )))

  private handleError(err) {
    let message = '';
    if(err.status > 400 && err.status < 500) {
      message = "You've messed up";
    } else if(err.status >=500 && err.status <=599) {
      message = "We've messed up";
    }
    console.log(`Url: ${err.url} Error message: ${err.statusText}`);

    return of(({ type: "FETCH_PRODUCTS_ERROR", payload: message }));
  }

  constructor(private actions$: Actions, private srv:ProductsService) { }
}