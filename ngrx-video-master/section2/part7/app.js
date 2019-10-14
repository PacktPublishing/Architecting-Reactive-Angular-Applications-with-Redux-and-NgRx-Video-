const { Subject, Observable } = require('rxjs');

const streamObservable$ = new Observable(observer => {
  observer.next(1);
  observer.next(2);
});

streamObservable$.subscribe(data => console.log('data', data));

const stream$ = new Subject();
stream$.subscribe(data => console.log('data', data));
stream$.next(1);
stream$.next(2);

const behaviorStream$ = new behaviorStream$('initial value');

setTimeout(() => {
  behaviorStream$.next(11);
}, 3000);

behaviorStream$.subscribe(data => console.log('behavior stream', data));

// the case for a behaviorSubject
const replayStream$ = new ReplaySubject();
replayStream$.next(1);
replayStream$.next(2);
replayStream$.next(3);
replayStream$.next(4);
replayStream$.next(5);

replayStream$.subscribe(data => console.log('replay stream', data));
replayStream$.next(6);