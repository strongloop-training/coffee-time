module.exports = function(CoffeeShop) {
  CoffeeShop.validatesPresenceOf('name');

  CoffeeShop.validatesLengthOf('name',{
      min: 5,
      max: 100,
      message: {
          min: 'Name is too short',
          max: 'Name is too long'
      }
  });

  CoffeeShop.status = function(id, cb) {

    CoffeeShop.findById(id, function(err, shop) {
      if (err) {
        return cb(err);
      }
      if(!shop){
        return cb({message:'Not found', status:404});
      }

      // Hmm... wonder who this is? Check the current context!
      // console.log( loopback.getCurrentContext().get('accessToken') );

      var hour = (new Date()).getHours();
      var status = (hour >= shop.openingHour && hour < shop.closingHour);
      cb(null, status);
    });
  };

  CoffeeShop.remoteMethod(
    'status',
    {
      description : 'Get open/closed status based on current time',
      accepts: {
        arg: 'id',
        type: 'number',
        description: 'Model id',
        required: true,
        http: { source: 'path' }
      },
      accessType: 'READ',
      returns: { arg: 'isOpen', type: 'boolean' },
      // alternately, to return the boolean "unwrapped":
      // returns: { root: true, type: 'boolean' },
      http: [
        { verb: 'get', path: '/:id/status' }
      ]
    }
    );

};
