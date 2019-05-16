import { Component, OnInit } from '@angular/core';
import { products } from '../products-data';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products;
  constructor() { 
    this.products = products;
  }

  ngOnInit() {
  }

}
