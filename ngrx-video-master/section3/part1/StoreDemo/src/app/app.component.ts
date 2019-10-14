import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from './app-state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  counter$: Observable<number>;
  title = 'StoreDemo';
  constructor(private store: Store<AppState>) {
    this.counter$ = store.select('counter');
  }
}
