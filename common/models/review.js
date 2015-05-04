module.exports = function(Review) {
    
    Review.validatesNumericalityOf('rating', {
        int: true,
        message: 'Please enter a rating from 1 to 5'
    });
    
    Review.validate('rating', validateRating, { message: 'Please enter a rating from 1 to 5' });
    
    function validateRating(errorCallback) {
        var rating = Number(this.rating);
        if (!rating || rating < 1 || rating > 5) {
            errorCallback();
        }
    }
    
    
    Review.afterRemote('create', function(context, review, next) {
        
        // Email business owner of new review perhaps...
        
        Review.app.models.CoffeeShop.findById(review.coffeeShopId, function(err, shop) {
            if (err) { return next(err); }
            
            console.log('Sending email to CoffeeShop:', shop.name);
            
            /*
            Review.app.models.Email.send({
                to: 'shop-owner@shop.com',
                from: 'reviews@coffee-time.com',
                subject: 'New review on your shop!',
                text: 'Here is the new review...'
            }, function(err, mail) {
                cb(err);
            });
             */
            
            next();
        });
    });
    
};