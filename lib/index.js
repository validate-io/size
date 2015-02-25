/**
*
*	VALIDATE: size
*
*
*	DESCRIPTION:
*		- Validates if a value is a multidimensional array of specified dimensions.
*
*
*	NOTES:
*		[1]
*
*
*	TODO:
*		[1]
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2015. Athan Reines.
*
*
*	AUTHOR:
*		Athan Reines. kgryte@gmail.com. 2015.
*
*/

'use strict';

// MODULES //

var isArray = require( 'validate.io-array' ),
	isInteger = require( 'validate.io-nonnegative-integer' );


// FUNCTIONS //

/**
* FUNCTION: check( value, size )
*	Checks if a value is an array having a specified length.
*
* @private
* @param {*} value - value to be validated
* @param {*} len - array length
* @returns {Boolean} boolean indicating if a value is an array having a specified length
*/
function check( arr, size ) {
	var d;
	if ( !size.length ) {
		return true;
	}
	if ( !isArray( arr ) ) {
		return false;
	}
	d = size[ 0 ];
	if ( isInteger( d ) ) {
		if ( arr.length !== d ) {
			return false;
		}
	}
	for ( var i = 0; i < arr.length; i++ ) {
		if ( !check( arr[i], size.slice( 1 ) ) ) {
			return false;
		}
	}
	return true;
} // end FUNCTION check()


// ISSIZE //

/**
* FUNCTION: isSize( value, size )
*	Validates if a value is a multidimensional array of specified dimensions.
*
* @param {*} value - value to be validated
* @param {Array} size - size of the multidimensional array
* @returns {Boolean} boolean indicating if the value is a multidimensional array of specified dimensions
*/
function isSize( arr, size ) {
	if ( !isArray( arr ) ) {
		return false;
	}
	if ( !isArray( size ) || !size.length ) {
		throw new TypeError( 'isSize()::invalid input argument. Size must be an array specifying dimensions. Value: `' + size + '`.' );
	}
	return check( arr, size.slice() );
} // end FUNCTION isSize()


// EXPORTS //

module.exports = isSize;
