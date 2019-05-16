const itemsReducer = require('./reducers/items');

let state = {
  list : [],
  user: void 0
};

const listeners = [];

const dispatch = (action) => {
  // calc
  state = calc(state, action);
  listeners.forEach(l => l());
}

const calc = (prevState, action) => {
  return {
    list: itemsReducer(prevState.list, action)
  };
}

const subscribe = (listener) => {
  listeners.push(listener);
}

const select = (fn) => {
  return fn(state);
}

module.exports = {
  dispatch,
  subscribe,
  select
}