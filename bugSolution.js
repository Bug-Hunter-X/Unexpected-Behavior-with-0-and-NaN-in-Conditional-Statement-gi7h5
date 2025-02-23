function foo(x) {
  if (x === null || x === undefined) {
    return 0; // Correctly handles null and undefined
  } else if (isNaN(x)) {
    return 0; //Handles NaN
  } else if (x === 0) {
    return 0;
  } else {
    return x * 2;
  }
}

console.log(foo(null)); // 0
console.log(foo(undefined)); // 0
console.log(foo(0)); //0
console.log(foo(NaN)); //0, now correctly handles NaN