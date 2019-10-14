const reducer = (prevState, action) => {
  switch(action.type) {
    case 'CREATE_ITEM':
      return [ ...prevState, action.payload];
    case 'REMOVE_ITEM':
      return [ ...prevState.filter(i => i.id === action.payload.id)];
    default:
      return prevState;
  }
}

module.exports = reducer;