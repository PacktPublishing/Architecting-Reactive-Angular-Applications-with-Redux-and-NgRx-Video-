const { Observable } = require('rxjs');

const stream$ = new Observable(observer => {
  observer.next(1);
  observer.next(2);
});

stream$.subscribe(data => console.log('data', data));

const streamPromise$ = new Observable(observer => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve('data');
    }, 3000);
  });
  promise.then(
    data => observer.next(data)
  );
});

streamPromise$.subscribe(
  data => console.log('from promise', data),
  error => console.error('from promise error', error)
);

const streamPromiseII$ = new Observable(observer => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('error');
    }, 3000);
  });
  promise.then(
    data => observer.next(data),
    error => observer.error(error)
  );
});

streamPromiseII$.subscribe(
  data => console.log('from promise II', data),
  error => console.error('from promise II error', error)
);

const streamPromiseIII$ = new Observable(observer => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('data');
    }, 3000);
  });
  promise.then(
    data => { 
      observer.next(data);
      observer.complete(); 
    },
    error => observer.error(error)
  );
});

streamPromiseIII$.subscribe(
  data => console.log('from promise III', data),
  error => console.error('from promise III error', error),
  () => console.log('from promise III, completed')
);