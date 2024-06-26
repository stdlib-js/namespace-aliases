#!/usr/bin/env node

/**
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var resolve = require( 'path' ).resolve;
var logger = require( 'debug' );
var writeFile = require( '@stdlib/fs-write-file' ).sync;
var namespace = require( '@stdlib/namespace' );


// VARIABLES //

var debug = logger( 'namespace:aliases:build' );

// Output file paths:
var OUTPUT_JSON = resolve( __dirname, '..', 'data', 'data.json' );
var OUTPUT_TEXT = resolve( __dirname, '..', 'data', 'data.txt' );


// FUNCTIONS //

/**
* Main execution sequence.
*
* @private
*/
function main() {
	var fopts;
	var list;
	var ns;
	var i;

	debug( 'Extracting list of namespace aliases...' );
	ns = namespace();
	list = [];
	for ( i = 0; i < ns.length; i++ ) {
		list.push( ns[ i ].alias );
	}

	debug( 'Writing list of namespace aliases to JSON file...' );
	fopts = {
		'encoding': 'utf8'
	};
	writeFile( OUTPUT_JSON, JSON.stringify( list )+'\n', fopts );

	debug( 'Writing list of namespace aliases to text file...' );
	fopts = {
		'encoding': 'utf8'
	};
	writeFile( OUTPUT_TEXT, list.join( '\n' ), fopts );
}


// MAIN //

main();
