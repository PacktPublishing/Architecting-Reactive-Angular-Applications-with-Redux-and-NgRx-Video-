const {
  of , Subject, BehaviorSubject, subj
} = require('rxjs');

const {
  map
} = require('rxjs/operators');

// new Subject(1);

const stream = new BehaviorSubject(0);
console.log('current value',stream.value);

stream.subscribe(data => console.log('data', data));
stream.next(1);
stream.next(2);
stream.next(3);
