var assert = require( 'chai' ).assert;
var path = require('path');
var require_enhance = require( '../index' )( path.join(__dirname,"../example/App" ));
//var require_enhance = require( '../index' )( `${__dirname}/../example/App` );


describe( 'Resolve Global', function () {
    it( 'should locate success by $at', function () {
        var module = require( $at( 'Module/someutils.js' ) );

        assert.equal( module.hello(), 'I am someutils Inside Module' );
    } );

    it('should locate success by $root', function () {
        var module = require( $root( 'OutsideModule' ) );
        assert.equal( module.hello(), 'I am Outside Module' );
    });

    it('should locate success by $lib',function () {
        var module = require( $lib( 'my-module' ) );
        assert.equal(module.hello(),'I am my-module');
    });

} );