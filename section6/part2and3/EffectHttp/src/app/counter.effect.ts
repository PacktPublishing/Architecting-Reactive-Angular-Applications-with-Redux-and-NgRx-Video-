import { Injectable } from "@angular/core";
import { Actions, ofType, Effect } from '@ngrx/effects';
import { tap } from 'rxjs/operators';

@Injectable()
export class CounterEffects {
  @Effect({ dispatch: false }) counter$ = this.actions$.pipe(
    ofType('INCREMENT'),
    tap(() => { console.log('increment happened') })
  )

  constructor(private actions$: Actions) {}
}