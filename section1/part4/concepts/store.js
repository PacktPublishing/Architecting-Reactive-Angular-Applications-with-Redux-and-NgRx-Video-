// PSEUDO code

// store

let state = {
  list: [],
  user: void 0
}

const listeners = [];

//dispatch
const dispatch = (action) => {
  listeners.forEach(l => l());
};

// select
const select = (fn) => fn(state);

const selector = (state) => state.list;

//subscribe


const subscribe = (listener) => {
  listeners.push(listener);
}