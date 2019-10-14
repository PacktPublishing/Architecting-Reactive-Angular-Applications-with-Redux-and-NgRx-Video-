import { Component } from '@angular/core';
import { AppState } from './app-state';
import { Store, select } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { selectAll, selectProducts, selectProductsAlt, homeCooked } from './product.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'EnititySelector';
  id = 0;
  name;

  constructor(private store: Store<AppState>) {
    this.store
      .pipe(select(homeCooked))
      .subscribe(products => console.log("products", products));
  }

  private toList(products) {
    return Object.keys(products.entities).map(key => products.entities[key]);
  }

  add() {
    console.log('adding');
    this.id++;
    this.store.dispatch({ 
      type: '[Products] add', 
      payload: { id: this.id, name: this.name }
    });
    this.name = '';
  }
}
