
var assert = require('chai').assert;

var CoffeeShop = {};
    modelInit = require('../common/models/coffee-shop.js');

CoffeeShop.findById = function(id, cb) {
    // Our mock can simply execute the callback, asynchronously...
    
    var closingHour = (id === 13) ? 23 : 6;
    
    process.nextTick(function() {
        cb(null, {
            id: id,
            name: 'Foobar',
            openingHour: 4, // you could alter these based on the id
            closingHour: closingHour
        });
    });
};

// We also don't really care about creating the remote method for our unit test
CoffeeShop.remoteMethod = function() { /* noop */ }

modelInit(CoffeeShop);


describe('CoffeeShop', function() {
    it('should return true when open', function( done ) {
        
        CoffeeShop.status(13, function( err, isOpen ) {
            assert.isNull( err );
            assert.ok( isOpen );
            done();
        });
        
    });
    
    it('should return false when closed', function( done ) {
        
        CoffeeShop.status(27, function( err, isOpen ) {
            assert.isNull( err );
            assert.notOk( isOpen );
            done();
        });
        
    });
});
