const {
  of , Subject, BehaviorSubject, Observable
} = require('rxjs');

const { scan } = require('rxjs/operators');

// { language: '', products: [] }
// { language: '', products: [{ name: 'movie' }] }
// { language: 'en', products: [{ name: 'movie' }] }

let array = [1,2,3];
let sum = array.reduce((acc, curr) => {
  return acc + curr
});

let state = [{
  language: '',
  products: []
},
{
  language: '',
  products: [{
    name: 'movie'
  }]
},
{
  language: 'en',
  products: [{
    name: 'movie'
  }]
}]

// let computedState = state.reduce((acc, curr) => {
//   console.log('acc state', acc);
//   return {...acc, ...curr}
// });

// let subject = new BehaviorSubject(0);

// const sum$ = subject.pipe(
//   scan((acc, curr) => {
//     console.log(`acc: ${acc} curr ${curr}`);
//     return acc + curr
//   })
// );

// sum$.subscribe(data => console.log('subject sum',data));

// sum$.next(1)
// sum$.next(2)
// sum$.next(3)

let subject = new BehaviorSubject({ lang: '', products: [] });

const sum$ = subject.pipe(
  scan((acc, curr) => {
    console.log('acc:');
    console.log(acc);
    console.log('curr:');
    console.log(curr);
    return { ...acc, ...curr}
  })
);

sum$.subscribe(data => console.log('STATE', data));

sum$.next({ products: [{ name: 'movie' }] })
sum$.next({ lang: 'en' })

// console.log('sum', sum);
// console.log('final state', computedState);
