
module.exports = function(app) {

    app.models.Role.create({
        name: 'admin'
    }, function(err, role) {
        if (err) { cb(err); }
    });

    if (process.env.NODE_ENV === 'development') {
        var Reviewer = app.models.Reviewer;
        var CoffeeShop = app.models.CoffeeShop;
        var Review = app.models.Review;
        
        console.log('Creating test data...');
        
        Reviewer.create([
            {
                username: "jordan",
                email: "jordan@foo.com",
                password: "foobar",
                hometown: "Austin"
            },
            {
                username: "bob",
                email: "bob@foo.com",
                password: "foobar",
                hometown: "Washington"
            }
        ]);
        
        console.log('Two Reviewers added...');
        
        CoffeeShop.create([
            {
                "name": "My Place",
                "openingHour": 8,
                "closingHour": 16
            },
            {
                "name": "Awesome Shop",
                "openingHour": 8,
                "closingHour": 16
            }
        ]);
        
        console.log('Two CoffeeShops added...');
        
        Review.create([
            {
                "text": "foobar for you",
                "rating": 1,
                "coffeeShopId": 1,
                "reviewerId": 1
            },
            {
                "text": "this place is great!",
                "rating": 5,
                "coffeeShopId": 1,
                "reviewerId": 2
            }
        ]);
        
        console.log('Two Reviews added...');
    }

};