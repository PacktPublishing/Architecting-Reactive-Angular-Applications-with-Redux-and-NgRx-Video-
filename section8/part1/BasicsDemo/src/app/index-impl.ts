interface Product {
  id: number;
  name: string;
}

function cartReducer(state = {}, action) {
  switch (action.type) {
    default:
      return state;
  }
}

function productsReducer(state = [], action) {
  switch (action.type) {
    default:
      return state;
  }
}

export interface State {
  products: Product[]
}

export const reducers: ActionReducerMap<State> = {
  products: productsReducer
};