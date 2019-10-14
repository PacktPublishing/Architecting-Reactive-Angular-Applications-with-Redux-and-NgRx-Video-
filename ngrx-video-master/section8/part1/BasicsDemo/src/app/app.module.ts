import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { customersReducer } from './customers/customer.reducer';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }







// PRE-STEP: npm install @ngrx/store @ngrx/store-devtools

// Sets up root store, reducers and meta reducers
// ng generate @ngrx/schematics:store State --root --module app.module.ts

/* create Admin module, add feature store setup and basic reducers and meta reducers 
ng generate module admin --flat false
ng generate @ngrx/schematics:store admin/Admin -m admin.module.ts
*/

// ng generate @ngrx/schematics:store admin/Admin -m admin.module.ts

