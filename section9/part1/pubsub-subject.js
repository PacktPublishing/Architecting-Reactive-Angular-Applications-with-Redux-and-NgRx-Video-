const {
  of , Subject, BehaviorSubject
} = require('rxjs');

const {
  map
} = require('rxjs/operators');

class Store {
  constructor() {
    this.subject = new Subject();
  }

  dispatch(val) {
    if (val === 'error') {
      this.subject.error(val);
    } else if(val === 'close') {
      // console.log('completed');
      this.subject.complete();
    } 
    else {
      this.subject.next(val);
    }
  }
  subscribe(observer) {
    this.subject.subscribe(observer);
  }
}

const store = new Store();
// store.subscribe(
//   (data) => console.log('value from Store', data),
//   err => console.log('error from the Store', err),
//   () => console.log('complete from the store')
// );

store.subscribe({
  next: (data) => console.log('value from Store', data),
  error: err => console.log('error from the Store', err),
  complete: () => console.log('complete from the store')
});

store.subscribe({
  next: (data) => console.log('value from Store2', data),
  error: err => console.log('error from the Store2', err),
  complete: () => console.log('complete from the store2')
});

store.dispatch(1);
store.dispatch(2);
store.dispatch(4);
// will close
store.dispatch('close');
// will err
store.dispatch('error');
// store.dispatch('close');

// NOTE: error or complete will close the stream.. nothing can happen after that


console.log('closed', store.subject.closed);
