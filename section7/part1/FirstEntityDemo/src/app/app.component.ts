import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from './app-state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FirstEntityDemo';

  constructor(private store: Store<AppState>) {
    this.store.pipe(
      select(state => state.products)
    )
    .subscribe(data => console.log('products', data));

    this.store.pipe(
      select(state => state.customers)
    )
      .subscribe(data => console.log('customers', data));
  }
}
