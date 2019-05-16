import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';

const productsReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD':
      return [...state, { ...action.payload }];
    case 'REMOVE':
      return state.filter(p => p.id !== action.payload.id);
    case 'UPDATE':
      // 1) messes up order 
      // let product = state.find(p => p.id === action.payload.id);
      // product = { ...product, ...action.payload };

      // const products = state.filter(p => p.id !== action.payload.id);
      // return [
      //   product,
      //   ...products 
      // ];

      // 2) better, preserves order
      return state.map(p => {
        if(p.id === action.payload.id) {
          return { ...p, ...action.payload}
        } else {
          return p;
        }
      })
    
    default:
      return state;
  }
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({
      products: productsReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
