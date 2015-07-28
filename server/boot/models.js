
module.exports = function(app) {
    
    // We can add a custom relationship here that enforces a "scope" to limit 'get' requests
    app.models.CoffeeShop.hasMany(app.models.Review, {
        as: 'jordans-reviews',
        scope: { where: { reviewerId: 1 } }
    });
    
};