import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// StoreModule
import { StoreModule, MetaReducer, ActionReducer } from '@ngrx/store';

// StoreRouterConnectingModule
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';

// RouterModule
import { RouterModule, CanActivate } from '@angular/router';

// StoreDevToolsModule
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { localStorageSync } from 'ngrx-store-localstorage';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

// what props we will sync to localStorage `counter`, `router`
export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({ keys: ['counter', 'router'], rehydrate: true })(reducer)
}

const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];

const counterReducer = (state = 0, action) => {
  switch(action.type) {
    case 'INCREMENT':
      return state + 1;
    default:
      return state;
  } 
}

const routes = [{
  path: 'home',
  component: HomeComponent
}, {
  path: 'about',
  component: AboutComponent
}];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      router: routerReducer, // myReducer
      counter: counterReducer,
    }, {metaReducers}),
    StoreDevtoolsModule.instrument({
      maxAge: 5
    }),
    RouterModule.forRoot(routes, { enableTracing: false }),
    StoreRouterConnectingModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
