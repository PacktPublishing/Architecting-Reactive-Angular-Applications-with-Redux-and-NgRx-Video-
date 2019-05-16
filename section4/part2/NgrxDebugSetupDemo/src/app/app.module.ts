import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    default:
      return state;
  }
};

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case '[Cart] add':
      return [ ...state, { ...action.payload}];
    case '[Cart] remove':
     // return state.filter(item => item.id !== action.payload.id);
     // enable the above if you want to have a bug you can look at in DevTools
      return state.filter(item => item.id !== action.payload.id);
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
    StoreModule.forRoot({
      cart: cartReducer,
      counter: counterReducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge : 5
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
