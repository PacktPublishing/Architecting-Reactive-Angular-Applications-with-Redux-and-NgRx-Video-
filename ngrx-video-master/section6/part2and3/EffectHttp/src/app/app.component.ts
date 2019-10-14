import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from './app-state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EffectHttp';
  counter$;
  /**
   *
   */
  constructor(private store: Store<AppState>) {
    this.counter$ = store.pipe(
      select('counter')
    );
    
  }

  increment() {
    this.store.dispatch({ type: 'INCREMENT' });
  }
}
