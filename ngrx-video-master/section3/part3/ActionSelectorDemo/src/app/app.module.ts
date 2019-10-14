import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule, ActionReducerMap } from '@ngrx/store';
import { ProductActionUnion, ProductActionTypes, CreateProductAction } from './product.actions';
import { AppState } from './app-state';
import { Item } from './item';
import { Product } from './product';

const productsReducer = (state:Array<Product> = [], action: ProductActionUnion) => {
  switch(action.type) {
    case ProductActionTypes.Create:
      return [...state, { ...action.payload }];
    default:
      return state;
  }
}

const itemsReducer = (state:Array<Item> = [], action) => {
  switch (action.type) {
    case '[Item] add':
      return [...state, { ...action.payload }];
    default:
      return state;
  }
}

export const reducers: ActionReducerMap<AppState> = {
  products: productsReducer,
  items: itemsReducer
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
