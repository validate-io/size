Size
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Validates if a value is a multidimensional array of specified dimensions.


## Installation

``` bash
$ npm install validate.io-size
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

``` javascript
var isSize = require( 'validate.io-size' );
```

#### isSize( value, size )

Validates if a `value` is a multidimensional `array` of specified dimensions.

``` javascript
var value = [
	[1,2],
	[3,4]
];

var bool = isSize( value, [2,2] );
// returns true
```

To restrict validation to particular dimensions, use a wildcard; i.e., anything which is __not__ a nonnegative `integer`.

``` javascript
var value = [
	[[1,2,3],[4,5,6]],
	[[7,8,9],[10,11,12]]
];

// Validate only the first and third dimensions:
var bool = isSize( value, [2,'*',3] );
// returns true

// Validate only the third dimension:
bool = isSize( value, [null,null,3] );
// returns true

// Only validate that the input value is a 3d array:
bool = isSize( value, ['*','*','*'] );
// returns true
```

__Note__: for each dimension, the method validates that the dimension is an `array`. For all other types, the method will return `false`.


## Examples

``` javascript
var isSize = require( 'validate.io-size' );

var arr = [
	[1,2],
	[3,4]
];
console.log( isSize( arr, [2,2] ) );
// returns true

console.log( isSize( arr, [2] ) );
// returns true

console.log( isSize( arr, [2,3] ) );
// returns false

arr[ 1 ].push( 5 );
console.log( isSize( arr, [2,2] ) );
// returns false
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT). 


## Copyright

Copyright &copy; 2015. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/validate.io-size.svg
[npm-url]: https://npmjs.org/package/validate.io-size

[travis-image]: http://img.shields.io/travis/validate-io/size/master.svg
[travis-url]: https://travis-ci.org/validate-io/size

[coveralls-image]: https://img.shields.io/coveralls/validate-io/size/master.svg
[coveralls-url]: https://coveralls.io/r/validate-io/size?branch=master

[dependencies-image]: http://img.shields.io/david/validate-io/size.svg
[dependencies-url]: https://david-dm.org/validate-io/size

[dev-dependencies-image]: http://img.shields.io/david/dev/validate-io/size.svg
[dev-dependencies-url]: https://david-dm.org/dev/validate-io/size

[github-issues-image]: http://img.shields.io/github/issues/validate-io/size.svg
[github-issues-url]: https://github.com/validate-io/size/issues
