function foo(x) {
  if (x == null) {
    return 0; //This is the problematic line
  }
  return x + 1;
}
console.log(foo(null)); //Output: 0
console.log(foo(undefined)); //Output: NaN
console.log(foo(0)); //Output: 1