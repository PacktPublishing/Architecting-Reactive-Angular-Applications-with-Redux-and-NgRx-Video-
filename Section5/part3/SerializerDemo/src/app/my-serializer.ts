import { RouterStateSerializer } from "@ngrx/router-store";
import { RouterStateSnapshot } from "@angular/router";

interface MyState {
  url: string;
  queryParams;
  params;
}

export class MySerializer implements RouterStateSerializer<MyState> {
  serialize(routerState: RouterStateSnapshot): MyState {
    console.log("serializer");
    console.log("complete router state");

    const {
      url,
      root: {
        queryParams,
        firstChild: { params }
      }
    } = routerState;
    return { url, queryParams, params };
  }
}
