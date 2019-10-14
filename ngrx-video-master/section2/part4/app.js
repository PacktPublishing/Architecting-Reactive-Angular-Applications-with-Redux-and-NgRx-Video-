const { of } = require('rxjs');
const { map, filter, tap } = require('rxjs/operators');

// projection
const streamProjection$ = of(1,2,3,4).pipe(
  map(value => value + 1)
);

streamProjection$.subscribe(data => console.log('data', data));

// filtering - decide what gets emitted
const streamFiltered$ = of(1,2,3,4);

streamFiltered$.pipe(
  filter(value => value % 2 === 0)
);

streamFiltered$.subscribe(data => console.log('filtered', data));

// combining operators
const projectionAndFiltering$ = of(1,2,3,4).pipe(
  map(value => value + 1),
  filter(value => value % 2 === 0)
)

projectionAndFiltering$.subscribe(data => console.log('projection and filtering', data));

// debugging
const debuggingStream$ = of(1,2,3).pipe(
  tap(value => console.log('before map', value)),
  map(value => value + 1),
  tap(value => console.log('after map', value)),
  filter(val => val % 2 === 0)
);
debuggingStream$.subscribe(data => console.log('debugging emitted', data));
