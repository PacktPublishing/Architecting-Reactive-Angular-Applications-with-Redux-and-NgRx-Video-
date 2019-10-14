import { Component, OnInit } from '@angular/core';
import { AppState } from './app-state';
import { Store, select } from '@ngrx/store';
import { of, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'products',
  templateUrl: 'products.component.html'
})

export class ProductsComponent implements OnInit {
  products$;
  error$;

  constructor(private store: Store<AppState>) { 
    this.products$ = this.store.pipe(
      select(state => state.products.data)
    );

    this.error$ = this.store.pipe(
      select(state => state.products.error)
    )
  }

  ngOnInit() { 
    this.store.dispatch({ type: "FETCH_PRODUCTS" });
  }

  save() {
    this.store.dispatch({ type: 'SAVE_PRODUCTS', payload: 'saving' });
  }
}