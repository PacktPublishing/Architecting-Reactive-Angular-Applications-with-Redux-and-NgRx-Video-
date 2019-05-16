import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class UserEffects {

  @Effect({ dispatch: true })
  user$ = this.actions$.pipe(
    ofType('INCREMENT'),
    switchMap(() => {
      return of('some value')
    })
  )

  constructor(private actions$: Actions) {}

}
