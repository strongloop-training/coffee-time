
module.exports = function(app) {
    
    app.models.CoffeeShop.hasMany(app.models.Review, {
        as: 'jordans',
        scope: { where: { reviewerId: 1 } }
    });
    
};