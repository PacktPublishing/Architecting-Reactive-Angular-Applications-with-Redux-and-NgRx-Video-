const { of, fromEvent, from } = rxjs;
const { map, debounceTime, flatMap, switchMap } = rxjs.operators;

// fake HTTP call
const getData = (text) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(`data based on: ${text}`)
    }, 2000);
  })
}

const textElem = document.getElementById('text');
const resultElem = document.getElementById('result');

const eventStream$ = fromEvent(textElem, 'keyup').pipe(
  map(e => e.target.value), // 1
  // map(e => from(getData(e.target.value))), // 2
  // flatMap(e => from(getData(e.target.value))), // 3
  debounceTime(500), // 4
  switchMap(e => from(getData(e.target.value))), // 5
)

eventStream$.subscribe(data => console.log('event stream', data));