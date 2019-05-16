// install RxJS
// npm install rxjs --save
// import
const { of, interval } = require('rxjs');

// instantiate an Observable
const stream$ = of(1,2,3);

// subscribe
stream$.subscribe(data => console.log('data', data));

//unsubscribe
const intervalStream$ = interval(1000);
const subscription = intervalStream$
  .subscribe(data => console.log('interval stream', data));

setTimeout(() => {
  subscription.unsubscribe();
}, 3012);