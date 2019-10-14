// mutable code

var sum = 2;

function double() {
  sum*= 2;
}

function add(a) {
  sum += a;
}

double();
add(5)
console.log('sum', sum);