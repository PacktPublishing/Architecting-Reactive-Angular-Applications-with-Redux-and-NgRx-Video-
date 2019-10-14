export function productsReducer(state = [], action) {
  switch(action.type) {
    case '[Product] Add':
      return [...state, { ...action.payload}];
    case '[Product] Remove':
      return state.filter(p => p.id !== action.payload.id);
    case '[Product] Load':
      return action.payload;
    default:
      return state;
  }
}