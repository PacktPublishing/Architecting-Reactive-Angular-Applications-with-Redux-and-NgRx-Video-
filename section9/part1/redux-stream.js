const { BehaviorSubject } = require('rxjs');
const { scan, map } = require('rxjs/operators');
// 1 create Store class
// 2 create subject in constructor
// 3 set up pipe in constructor as well
// 4 create dispatch method, call next()
// 5 add reducer
// 6 inherit from Subject, add select
function languageReducer(state = '', action) {
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

class Store extends BehaviorSubject {
  constructor(/* */) {
    super({
      lang: '',
      products: []
    })

    this.stream$ = this.pipe(
      scan((acc, curr) => {
        return {
          ...acc,
          ...curr
        }
      })
    );
  }
  dispatch(action){
    // console.log('stream value',this.subject.value);
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
}

const store = new Store();
store.subscribe({
  next: (data) => console.log('redux', data)
})

store.select(state => state.lang).subscribe(data => console.log('lang', data))

// store.dispatch({ lang: 'en' });

// store.dispatch({
//   products: [{ name: 'movie' }]
// });


// OK, works for language BUT
// doesn't work for products
// ALSO requires knowledge of internal structure





// we would like call store like this instead:

store.dispatch({ type: '[Language] load', payload: 'en' });
store.dispatch({
  type: '[Product] add',
  payload: { name: 'movie' }
});
store.dispatch({
  type: '[Product] add',
  payload: {
    name: 'theater'
  }
});



