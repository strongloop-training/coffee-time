'use strict';

var loopback = require('loopback');

module.exports = function(CoffeeShop) {

    CoffeeShop.status = function(id, cb) {
        
        CoffeeShop.findById(id, function(err, shop) {
            if (err) {
                cb(err);
                return;
            }
            
            // Hmm... wonder who this is? Check the current context!
            console.log( loopback.getCurrentContext().get('accessToken') );
            
            var hour = (new Date()).getHours();
            var status = (hour >= shop.openingHour &&
                          hour < shop.closingHour)
            
            cb(null, status);
        });
    };

    CoffeeShop.remoteMethod(
        'status',
        {
            accepts: {
                arg: 'id',
                type: 'number',
                description: 'Model id',
                required: true,
                http: { source: 'path' }
            },
            accessType: 'READ',
            returns: { arg: 'isOpen', type: 'boolean' },
            http: [
                { verb: 'get', path: '/:id/status' }
            ]
        }
    );

};
