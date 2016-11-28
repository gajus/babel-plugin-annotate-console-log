class Foo {
  bar() {
    console.log('Foo->bar()', 'a');
  }
}

const Baz = class {
  qux() {
    console.log('Baz->qux()', 'a');
  }
};
