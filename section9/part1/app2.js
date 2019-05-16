const {
  of , Subject, BehaviorSubject
} = require('rxjs');

const {
  map
} = require('rxjs/operators');


const stream = new Subject();
stream.next(1);
stream.subscribe(data => console.log('data', data));

stream.next(2);
stream.next(3);
