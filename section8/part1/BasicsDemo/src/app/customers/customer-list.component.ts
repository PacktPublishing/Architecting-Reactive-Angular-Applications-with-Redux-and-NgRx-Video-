import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../app-state';
import { customerListSelector } from './customer.selectors';

@Component({
  selector: 'customer-list',
  templateUrl: 'customer-list.component.html'
})

export class CustomerListComponent implements OnInit {
  constructor(store: Store<AppState>) { 
    store.pipe(
      select(customerListSelector)
    );
  }

  ngOnInit() { }
}