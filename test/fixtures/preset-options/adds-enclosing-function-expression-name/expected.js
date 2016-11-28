const foo = function bar() {
  console.log('bar()', 'a');
};

const baz = function () {
  console.log('baz()', 'a');
};

let qux;

qux = function () {
  console.log('qux()', 'a');
};

let quux = {};

quux.quuz = function () {
  console.log('quux.quuz()', 'a');
};
