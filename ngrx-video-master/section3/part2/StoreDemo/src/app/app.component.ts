import { Component } from '@angular/core';
import { AppState } from './app-state';
import { Store } from '@ngrx/store';
import { Product } from './product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'StoreDemo';
  products$;
  newProduct: string;
  id = 0;
  selectedProduct;

  constructor(private store: Store<AppState>) {
    this.products$ = this.store.select('products');
  }

  select(product) {
    this.selectedProduct = { ...product};
  }

  update() {
    this.store.dispatch({
      type: 'UPDATE',
      payload: this.selectedProduct
    });
    this.selectedProduct = null;
  }

  save() {
    this.store.dispatch({ 
      type: 'ADD', 
      payload: { name: this.newProduct, id: this.id++ } 
    });

    this.newProduct = '';
  }

  delete(product: Product) {
    this.store.dispatch({ type: 'REMOVE', payload: product });
  }
}
