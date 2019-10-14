const {
  BehaviorSubject
} = require('rxjs');
const {
  scan,
  map
} = require('rxjs/operators');

const productService =  {
  getProducts: () => {
    // do a GET call
    return new Promise(resolve => {
      setTimeout(() => {
        resolve([{ name: 'movie async' }, { name: 'book async' }])
      },1000);
    });
  }
}

function languageReducer(state = '', action) {
  switch (action.type) {
    case '[Language] load':
      return action.payload;
    default:
      return state;
  }
}

function productsReducer(state = {}, action) {
  switch (action.type) {
    case '[Product] add':
      return {
        ...state,
        list: [...state.list, action.payload]
      };
    case '[Product] fetch':
      return { ...state, loading: true };
    case '[Product] load':
      return {
        error: undefined,
        loading: false,
        list: [...action.payload],
      };
    case '[Product] error':
      return {
        ...state,
        error: action.payload,
        loading: false,
      }
    default:
      return state;
  }
}

class Store extends BehaviorSubject {
  constructor( /* */ ) {
    super({
      lang: '',
      products: { 
        loading: false, 
        list: [], 
        error: undefined 
      }
    })

    this.effectListenerMap = {};

    this.stream$ = this.pipe(
      scan((acc, curr) => {
        return {
          ...acc,
          ...curr
        }
      })
    );
  }
  dispatch(action) {
    const topics = Object.keys(this.effectListenerMap);
    if (topics.includes(action.type)) {
      this.effectListenerMap[action.type].forEach(l => l(this.dispatch.bind(this), action));
    }

    const currentState = this.value;
    const newState = {
      lang: languageReducer(currentState.lang, action),
      products: productsReducer(currentState.products, action)
    };

    this.stream$.next(newState);
  }

  select(fn) {
    return this.pipe(
      map(fn)
    );
  }

  effect(topic, listener) {
    if(!this.effectListenerMap[topic]) {
      this.effectListenerMap[topic] = [];
    }
    this.effectListenerMap[topic].push(listener);
  }
}

const store = new Store();
store.subscribe({
  next: (data) => console.log('redux', data)
})

store.select(state => state.lang).subscribe(data => console.log('STATE lang', data))
store.select(state => state.products).subscribe(data => console.log('STATE products', data));
store.dispatch({
  type: '[Language] load',
  payload: 'en'
});
store.dispatch({
  type: '[Product] add',
  payload: {
    name: 'movie'
  }
});
store.dispatch({
  type: '[Product] add',
  payload: {
    name: 'theater'
  }
});

store.effect('[Product] fetch', async (dispatch, action) => {
  // go POST product
  // const products = await productService.getProducts();
  // console.log('response from HTTP', products);
  // dispatch({
  //   type: '[Product] load',
  //   payload: products
  // })
})

store.dispatch({ type: '[Product] fetch' });

// 
