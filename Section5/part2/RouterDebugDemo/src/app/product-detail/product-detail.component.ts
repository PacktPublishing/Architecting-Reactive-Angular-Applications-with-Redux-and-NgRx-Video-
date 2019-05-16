import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { from, of } from 'rxjs';
import { products } from '../products-data';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product$;

  constructor(private route:ActivatedRoute) { 
    this.product$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.getProduct(params.get('id')))
    );
  }

  ngOnInit() {
  }

  getProduct(id) {
    const no = parseInt(id);
    return of(products.find(p => p.id === no));
  }

}
