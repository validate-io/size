/* global require, describe, it */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	isSize = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'validate.io-size', function tests() {

	it( 'should export a function', function test() {
		expect( isSize ).to.be.a( 'function' );
	});

	it( 'should throw an error if not provided a non-empty size array', function test() {
		var values = [
			'5',
			5,
			null,
			undefined,
			NaN,
			true,
			function(){},
			[],
			{}
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[ i ] ) ).to.throw( TypeError );
		}
		function badValue( value ) {
			return function() {
				isSize( [], value );
			};
		}
	});

	it( 'should positively validate', function test() {
		var arr, bool;

		arr = [[],[]];

		bool = isSize( arr, [2,0] );
		assert.ok( bool, 'empty dimensions' );

		arr = [
			[1,2],
			[3,4]
		];

		bool = isSize( arr, [2,2] );
		assert.ok( bool, 'standard use' );

		bool = isSize( arr, [2] );
		assert.ok( bool, 'limit number of dimensions' );

		arr = [
			[[1,2,3],[4,5,6]],
			[[7,8,9],[10,11,12]]
		];

		bool = isSize( arr, [2,2,3] );
		assert.ok( bool, 'multidimensional arrays' );

		bool = isSize( arr, [2,2] );
		assert.ok( bool, 'limit number of dimensions for multidimensional arrays' );

		bool = isSize( arr, [2,'*',3] );
		assert.ok( bool, 'use string wildcards' );

		bool = isSize( arr, [null,2,3] );
		assert.ok( bool, 'use null as a wildcard' );

		bool = isSize( arr, [null,undefined,3] );
		assert.ok( bool, 'use anything which is not a nonnegative integer as a wildcard' );

		bool = isSize( arr, [null,null,null] );
		assert.ok( bool, 'all wildcards' );

		arr = [[[[[[1,2,3,4,5,6]]]]]];

		bool = isSize( arr, [1,1,1,1,1,6] );
		assert.ok( bool, 'arbitrary array depth' );

		// Anything which is not a nonnegative integer is treated as a wildcard...
		bool = isSize( arr, [1,null,'',1.1,-1,6] );
		assert.ok( bool, 'validate particular dimensions' );

		bool = isSize( arr, [1,null,'',2,-1,6] );
		assert.notOk( bool, 'validate particular dimensions' );
	});

	it( 'should negatively validate', function test() {
		var values = [
			5,
			'5',
			null,
			undefined,
			true,
			NaN,
			function(){},
			[],
			{},
			[1,2,3],
			[[],[]],
			[[1,2,3],[1,2]],
			[[1,2],'']
		];

		for ( var i = 0; i < values.length; i++ ) {
			assert.notOk( badValue( values[i] ) );
		}
		function badValue( value ) {
			return isSize( value, [2,2] );
		}
	});

});
