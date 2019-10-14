enum CustomerActions {
  ADD = '[Customer] add',
  UPDATE = '[Customer] update',
  DELETE = '[Customer] delete',
  LOAD = '[Customer] load',
}

export function customerReducer(state = [], action) {
  switch (action.type) {
    case CustomerActions.ADD:
      return [...state, {...action.payload}];
    case CustomerActions.LOAD:
      return action.payload;
    case CustomerActions.UPDATE:
      return state.map(c => {
        if(c.id === action.payload.id) {
          return {...action.payload};
        } else {
          return c;
        }
      });
    case CustomerActions.DELETE:
      return state.filter(c => c.id !== action.payload.id);
  }

}