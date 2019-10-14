
import { ProductActions, ProductActionTypes } from './product.actions';

export interface State {

}

export const initialState: State = {

};

export function reducer(state = initialState, action: ProductActions): State {
  switch (action.type) {

    case ProductActionTypes.LoadProducts:
      return state;

    default:
      return state;
  }
}
