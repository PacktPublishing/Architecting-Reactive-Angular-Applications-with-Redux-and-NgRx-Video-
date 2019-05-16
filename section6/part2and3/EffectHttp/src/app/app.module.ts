import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// store + effects
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';


import { CounterEffects } from './counter.effect';
import { ProductsService } from './products.service';
import { productsReducer } from './products.reducer';
import { ProductsComponent } from './products.component';
import { ProductsEffects } from './products.effect';
import { HttpClientModule } from '@angular/common/http';

const counterReducer = (state = 0, action) => {
  switch(action.type) {
    case 'INCREMENT':
      return state + 1;
    default:
      return state;
  }
}

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({
      counter: counterReducer,
      products: productsReducer
    }),
    EffectsModule.forRoot([ CounterEffects, ProductsEffects ])
  ],
  providers: [
    ProductsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
