import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { CreateProductAction } from './product.actions';

const productsSelector = (state) => state.products;
const createProduct = (id, title) => ({
  type: '[Product] add',
  payload: { title, id }
});

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ActionSelectorDemo';
  products$;
  newProduct: string;
  id = 0;

  constructor( private store: Store<any>) {
    this.products$ = this.store.select(productsSelector);
  }

  create() {
    this.store.dispatch(new CreateProductAction({
      id: this.id++,
      title: this.newProduct
    }));
    this.newProduct = '';
  }
}
