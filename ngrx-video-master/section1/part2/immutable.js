function double(a) {
  return a*2;
}

function add(prev, a) {
  return prev + a;
}

// first time around
let res = add(double(2), 5);
console.log('sum', res);

// same input, same results
res = add(double(2), 5);
console.log('sum', res);