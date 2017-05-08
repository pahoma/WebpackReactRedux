'use strict';

var args = process.argv.slice(2).reduce(
        function( acc, w ) {
            var parsed = /^--([^=]+)(?:=(.*))?$/.exec( w );
            if( parsed )
                acc.push( parsed[2] ? parsed.slice(1) : parsed[1] )
            else if( acc.length && typeof acc[acc.length-1] == 'string' )
                acc.push( [ acc.pop(), w ] );
            return acc;
        }, []
    ).reduce(
        function( acc, arg ) {
            if( typeof arg == 'string' )
                acc[arg] = true;
            else
                acc[arg[0]] = arg[1];
            return acc;
        }, {}
    ),

    exclude = {}, optional = {},

    todo = (args.config || "local")
            .split( /[,;+]/ )
            .filter( function( s ) {
                if( s.charAt(0) == '-' )
                    exclude[ s.substr(1) ] = true;
                else
                    return true;
            } ),

    ordered = [ {} ], processed = {};

// C3 MRO?

module.exports.require = function() {
    for( var i=arguments.length; i-- > 0; ) {
        var c = arguments[i];
        if( c.charAt(0) == '?' )
            optional[ c = c.substr(1) ] = true;

        todo.unshift( c );
    }
}

function safeRequire( mid ) {

    if( exclude[mid] )  return {};

    var path = "./config." + mid;

    try{
        return require( path );
    } catch(err) {
        if( err.code === 'MODULE_NOT_FOUND' && optional[mid] ){
            console.log('WARNING: optional configuration file ' + path + ' does not exist');
            return {};
        }
        throw err;
    }
}

while( todo.length ) {
    if( todo[0] in processed ) {
        var t = todo.shift();
        if( isObject( processed[t] ) ) {
            ordered.push( processed[t] );
            processed[t] = true;
        }
    } else {
        processed[todo[0]] = safeRequire( todo[0] );
    }
}

module.exports = ordered.reduce( deepMix );

Object.keys( args ).forEach( setConfigValueFromArgs );

function isObject( o ) {
    return o && typeof o === 'object' && !(o instanceof Date) && !(o instanceof Array) && !(o instanceof RegExp);
}

function deepMix( to, from ) {
    for( var p in from )
        if( to[p] != null && isObject( to[p] ) && isObject( from[p] ) )
            deepMix( to[p], from[p] );
        else if( from[p] == null )
            delete to[p];
        else
            to[p] = from[p] && isObject( from[p] ) ? deepMix( {}, from[p] ) : from[p];
    return to;
}

function setConfigValueFromArgs( path ) {
    var o = module.exports;
    path.replace( /\w+/g, function( p, at ) {
        if( at + p.length == path.length && o )
            o[p] = args[path];
        else if( o && isObject(o) )
            o = (o[p] == null ? (o[p] = {}) : o[p]);
    } );
}

