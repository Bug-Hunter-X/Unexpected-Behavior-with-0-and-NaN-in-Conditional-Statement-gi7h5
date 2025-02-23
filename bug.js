function foo(x){
  if (x == null) {
    return 0; //This will only catch null and undefined values
  } else {
    return x * 2;
  }
}

console.log(foo(null)); //0
console.log(foo(undefined)); //0
console.log(foo(0)); //0
console.log(foo(NaN)); //NaN, this is the unexpected behavior