const { of, Subject, BehaviorSubject, Observable } = require('rxjs');

const { map } = require('rxjs/operators');

// of(1,2,3)
// .subscribe(data => console.log('Observable', data));

// 1 2 3 4
// 1    2    3    4
// A: product, A:en, A:product, A:-product




// NOT Observable
// Subject = Observable, Observer

// adding data?


const stream = new Subject();
stream.subscribe(data => console.log('data', data));
stream.next(1);
stream.next(2);
stream.next(3);

