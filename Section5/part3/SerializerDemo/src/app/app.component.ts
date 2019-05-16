import { Component } from "@angular/core";
import { AppState } from "./app-state";
import { Store, select } from "@ngrx/store";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "SerializerDemo";
  counter$;

  constructor(private store: Store<AppState>) {
    this.counter$ = store.pipe(select("counter"));
  }

  increment() {
    this.store.dispatch({ type: "INCREMENT" });
  }
}
