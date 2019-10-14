import { Component } from "@angular/core";
import { AppState } from "./app-state";
import { Store, select } from "@ngrx/store";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.sass"]
})
export class AppComponent {
  counter$ = this.store.pipe(select("counter"));
  title = "SideEffectFirstDemo";
  constructor(private store: Store<AppState>) {}
  increment() {
    this.store.dispatch({ type: "INCREMENT" });
  }
}
