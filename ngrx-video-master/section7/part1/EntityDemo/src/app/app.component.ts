import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from './app-state';
import { Product } from './product';
import { selectAll, selectIds, selectTotal } from './product-entity.reducer';
import { map } from 'rxjs/operators';
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'EntityDemo';
  name: string;
  id: number = 0;
  prods$;

  constructor(private store: Store<AppState>) {
    this.store.select(state => selectAll(state.prods))
    .subscribe(data => console.log('data', data))

    this.store.select(state => selectIds(state.prods))
      .subscribe(data => console.log('ids', data))

    this.store.select(state => selectTotal(state.prods))
      .subscribe(data => console.log('total', data))

    // this.prods$ =this.store.pipe(
    //   select(state => state.prods.entities),
    //   map(e => this.toList(e))
    // )
    // .subscribe(data => {
    //   console.log('data', data);
    // })

    // this.store.pipe(
    //   select('products')
    // )
    // .subscribe(data => {
    //   console.log('products', data);
    // })

    this.store.pipe(
      select('counter')
    )
    .subscribe(data => {
      console.log('counter', data);
    })
  }

  private toList(data) {
    var keys = Object.keys(data);
    return keys.map(k => data[k]);
  }

  add() {
    this.store.dispatch({ type: "[Product] Add", payload: this.createProduct() });
    console.log('product', this.name);
  }

  private createProduct(): Product {
    this.id++;
    return { id: this.id + "", name: name, price: 0 };
  }
}


