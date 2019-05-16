import { Effect, ofType, Actions } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import { tap } from "rxjs/operators";

@Injectable()
export class EffectService {
  @Effect({ dispatch: false })
  increment$ = this.actions$.pipe(
    ofType("INCREMENT"),
    tap(() => {
      console.log("I should kick off something");
    })
  );
  constructor(private actions$: Actions) {}
}
