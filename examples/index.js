'use strict';

var isSize = require( './../lib' );

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
