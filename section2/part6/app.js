const { throwError, of, Observable, merge, onErrorResumeNext } = require('rxjs');
const { catchError, retry, retryWhen, delay, take, concat } = require('rxjs/operators');

const stream$ = new Observable(observer => {
  observer.next(1);
  observer.next(2);
  observer.next(3);
  throw new Error('stream crashed');
  observer.complete();
}).pipe(
  catchError(err => of('patched error'))
);

stream$.subscribe(
  data => console.log('data emitted', data),
  err => console.error('error emitted', err),
  () => console.log('stream completed')
);

let times = 3;
const retryStream$ = new Observable(observer => {
  observer.next(1);
  observer.next(2);
  observer.next(3);
  if(times > 0) {
    times--;
    throw new Error('error occurred');
  }
  observer.next(4);
}).pipe(
  retry(3)
);

retryStream$.subscribe(
  data => console.log('retry stream', data),
  err => console.error('retry error', err)
)

// retryWhen 
let retryAttempts = 3;
let timesRetry = 3;
const retryWhenStream$ = new Observable(observer => {
  observer.next(1);
  observer.next(2);
  observer.next(3);
  if (timesRetry > 0) {
    timesRetry--;
    throw new Error('error occurred');
  }
  observer.next(4);
}).pipe(
  retryWhen(errors => errors.pipe(
    delay(1000),
    take(retryAttempts),
    concat( throwError('ensure our retry crashes instead of completes'))
  ))
);

retryWhenStream$.subscribe(
  data => console.log('retry when stream', data),
  err => console.error('retry when error', err)
)

const streamCombined$ = merge(
  throwError('error'), // of(1,2,3),
  of(4,5,6),
  of(7,8,9)
);

streamCombined$.subscribe(
  data => console.log('combined data', data),
  err => console.log('combined err', err)
);

const streamCombinedIgnore$ = onErrorResumeNext(
    throwError('error'), // of(1,2,3),
    of (4, 5, 6), 
    of (7, 8, 9)
  )
;

streamCombinedIgnore$.subscribe(
  data => console.log('onErrorResumeNext, data', data),
  err => console.error('onErrorResumeNext, error', err)
)