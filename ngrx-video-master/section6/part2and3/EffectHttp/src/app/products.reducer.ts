const initialState = {
  loading: false,
  data: [],
  error: void 0
}

export function productsReducer(state = initialState, action) {
  switch(action.type) {
    case "FETCH_PRODUCTS":
      return { ...state, loading:true }
    case "LOAD_PRODUCTS":
      return { ...state, data: [...action.payload], loading: false }
    case "FETCH_PRODUCTS_ERROR":
      return { ...state, error: action.payload, loading: false }
    default:
      return state;
  }
}