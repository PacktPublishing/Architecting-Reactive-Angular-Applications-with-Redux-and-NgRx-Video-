import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DebugConfigDemo';
  counter$;
  products$;
  newProduct = '';

  constructor(private store: Store<any>) {
    this.counter$ = this.store.select('counter');
    this.products$ = this.store.select('list');
  }

  add() {
    this.store.dispatch({
      type: 'ADD',
      payload: this.newProduct
    });
    this.newProduct;
  }

  increment() {
    this.store.dispatch({
      type: 'INCREMENT'
    });
  }
}
