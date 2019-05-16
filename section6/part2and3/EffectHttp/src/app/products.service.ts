import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';


@Injectable()
export class ProductsService {
  saveCount = 0;
  updateCount = 0;
  saveProducts(action: never) {
    return of(`save attempt: ${this.saveCount++}`).pipe(
      delay(2000)
    );  
  }

  constructor(private http: HttpClient) { 

  }

  getProducts() {
    return this.http.get('/data/products.json');
  }
}