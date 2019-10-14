import { Component } from '@angular/core';
import { AppState } from './app-state';
import { Store, select } from '@ngrx/store';
import { selectAll } from './product.entity.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'RecapDemo';
  products$;
  customers$;

  constructor(private store: Store<AppState>) {
    this.products$ = this.store.pipe(
      select(state => selectAll(state.products))
    );
  }
}
