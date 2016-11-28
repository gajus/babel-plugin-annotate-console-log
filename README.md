# babel-plugin-annotate-console-log

[![Travis build status](http://img.shields.io/travis/gajus/babel-plugin-annotate-console-log/master.svg?style=flat-square)](https://travis-ci.org/gajus/babel-plugin-annotate-console-log)
[![NPM version](http://img.shields.io/npm/v/babel-plugin-annotate-console-log.svg?style=flat-square)](https://www.npmjs.org/package/babel-plugin-annotate-console-log)
[![Canonical Code Style](https://img.shields.io/badge/code%20style-canonical-blue.svg?style=flat-square)](https://github.com/gajus/canonical)
[![Twitter Follow](https://img.shields.io/twitter/follow/kuizinas.svg?style=social&label=Follow)](https://twitter.com/kuizinas)

Annotates [`console.log`](https://developer.mozilla.org/en-US/docs/Web/API/Console/log) call expression with information about the invocation context.

Works with `console.error`, `console.info`, `console.log` and `console.warn`.

* [Example transpilation](#example-transpilation)
* [Motivation](#motivation)

## Example transpilation

Input:

```js
function foo () {
  function bar () {
    console.log('apple');
  }
}

class Foo {
  bar () {
    console.log('banana');
  }
}
```

Output:

```js
function foo () {
  function bar () {
    console.log('foo() bar()', 'apple');
  }
}

class Foo {
  bar () {
    console.log('Foo->bar()', 'banana');
  }
}
```

## Motivation

I often get lost between many `console.log` messages. The [Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools/) allow you to [filter the `console` output](https://developers.google.com/web/tools/chrome-devtools/console/#filtering_the_console_output). However, you need to manually annotate each `console.log` statement with useful information for filtering.

This plugin enriches every `console.log` statement with information useful for filtering the messages.
