// reducer

function reducer(prevState = [], action) {
  switch(action.type) {
    case 'CREATE_ITEM':
      return [ ...prevState, {...action.payload}];
    default:
      return prevState;
  }
}

let state = reducer([], { type: 'CREATE_ITEM', payload: { title: 'new item' } });
console.log('state', state);

state = reducer([], { type: 'CREATE_ITEM', payload: { title: 'new item2' } });
console.log('state', state);