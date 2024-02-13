function foo(a) {
  return function bar(b) {
    return a * b;
  };
}

let res = foo(4)(5);
console.log('res:', res);
