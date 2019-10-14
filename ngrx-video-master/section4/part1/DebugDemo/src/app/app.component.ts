import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DebugDemo';
  counter$;
  constructor(private store: Store<any>) {
    this.counter$ = this.store.select('counter');
  }

  increment() {
    this.store.dispatch({
      type: 'INCREMENT'
    });
  }
}
