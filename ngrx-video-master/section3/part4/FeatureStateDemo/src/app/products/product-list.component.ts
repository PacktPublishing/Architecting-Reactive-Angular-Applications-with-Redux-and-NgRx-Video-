import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProductState } from './product-state';
import { getList } from './product.selector';

@Component({
  selector: 'product-list',
  templateUrl: 'product-list.component.html'
})

export class ProductListComponent implements OnInit {
  products$;
  newProduct: string;
  id = 0;

  constructor(private store:Store<ProductState>) { 
    this.products$ = this.store.select(getList);
    this.products$.subscribe(data => console.log('data', data));
  }

  create() {
    this.store.dispatch({
      type: '[Product] add',
      payload: { title: this.newProduct, id: this.id++ }
    })
  }

  ngOnInit() { }
}