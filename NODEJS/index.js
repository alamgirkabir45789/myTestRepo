const fs = require( 'fs' );


fs.exists( 'demo2.txt', ( result ) => {
    if ( result ) {
        console.log( 'found' );
    }
    else {
        console.log( 'not found' )
    }
} )