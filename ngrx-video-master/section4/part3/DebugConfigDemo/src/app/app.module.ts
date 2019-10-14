import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { FormsModule } from '@angular/forms';

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    default:
      return state;
  }
}

const listReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD':
      return [...state, action.payload];
    default:
      return state;
  }
};

const actionSanitizer = (action, id) => {
  const newAction = { ...action, payload: 'hiding the payload'};
  return newAction;
};

const stateSanitizer = (state, index) => {
  const maskedState = { ...state, list: ['showing obscrured state']}
  return maskedState; 
};

const devInstrument = {
  maxAge: 20,
  name: 'my dev instance'
};

const prodInstrument = {
  maxAge: 20,
  name: 'my PROD instance',
  actionSanitizer,
  stateSanitizer
};

const reducers = {
  counter: counterReducer,
  list: listReducer
};



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument(
      environment.production ? 
        prodInstrument:
        devInstrument
    ),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
