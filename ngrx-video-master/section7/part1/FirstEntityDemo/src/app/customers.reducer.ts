
export function customersReducer(state = [], action) {
  switch (action.type) {
    case "[Customers] add":
      return [...state, { ...action.payload }];
    case "[Customers] remove":
      return state.filter(p => p.id !== action.payload.id);
    case "[Customers] load":
      return action.payload;
    case "[Customers] update":
      return state.map(p => {
        if (p.id === action.payload.id) {
          return { ...action.payload };
        } else {
          return p;
        }
      });
    default:
      return state;
  }
}