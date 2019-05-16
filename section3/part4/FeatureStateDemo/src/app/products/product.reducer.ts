export const listReducer = (state = [], action) => {
  switch (action.type) {
    case '[Product] add':
      return [ ...state, { ...action.payload }];
    default:
      return state;
  }
} 

export const selectReducer = (state = null, action) => {
  switch(action.type) {
    case '[Product] select':
      return action.payload;
    default:
      return state;
  }
} 