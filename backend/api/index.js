'use strict';

// TO DO proxy for movies api's with using IMDB KEY API


const conf = require('../config'),
      express = require('express');

exports = module.exports = function(app) {

    function handleErrors( cb ) {
        return function(req, res, next) {
            console.log(cb);
            try {
                return cb.apply( app, arguments );
            } catch( err ) { next( err ) }
        }
    }

    app.use(
        '/api',
        express()
            .use( '/movie', handleErrors(movie) )
            .use( function(err, req, res, next ) {
                // TO DO implement logging
                //logger.mt.error( err.message, { stack: err.stack, url: req.originalUrl } );
                res.writeHead( err.httpStatus || 500 );
                res.end( err.message );
            })
    );

    function movie(req, res, next) {

    }
}
