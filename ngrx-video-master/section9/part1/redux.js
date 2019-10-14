function languageReducer(state ='', action) {
  switch(action.type) {
    case '[Language] load':
      return action.payload;
    default:
      return state;
  }
}

function productsReducer(state = [], action) {
  switch(action.type) {
    case '[Product] add':
      return [...state, {...action.payload}];
    default:
      return state;
  }
}

class Store {
  constructor() {
    this.listeners = [];
    this.state = { language: '', products: [] }
  }

  dispatch(action) {
    this.state = {
      products: productsReducer(this.state.products, action),
      language: languageReducer(this.state.language, action)
    }
    this.listeners.forEach(l => l(this.state));
  }

  subscribe(l) {
    this.listeners.push(l);
  }

  unsubscribe(l) {
    this.listeners = this.listeners.filter(listener => listener !==l);
  }

  get value() {
    return this.state;
  }

  select(fn) {
    return fn(this.state);
  }
}

const store = new Store();
console.log('initial state', store.value);
store.subscribe((state) => {
  console.log('subscriber1', state)
})
store.subscribe((state) => {
  console.log('subscriber2', state)
})

store.dispatch({ type: '[Product] add', payload: { name: 'movie' }});
store.dispatch({ type: '[Language] load', payload: 'en' });

