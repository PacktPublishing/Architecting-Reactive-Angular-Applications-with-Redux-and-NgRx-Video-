import { ProductActions } from "./product.actions";

export function productReducer(state = [], action) {
  switch (action.type) {
    case ProductActions.ADD:
      return [...state, { ...action.payload }];
    case ProductActions.LOAD:
      return action.payload;
    case ProductActions.UPDATE:
      return state.map(c => {
        if (c.id === action.payload.id) {
          return { ...action.payload };
        } else {
          return c;
        }
      });
    case ProductActions.DELETE:
      return state.filter(c => c.id !== action.payload.id);
  }

}