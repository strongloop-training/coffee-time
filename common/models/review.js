module.exports = function(Review) {

    Review.validate('rating', validateRating, {
      message: 'Please enter a rating from 1 to 5'
    });
    
    function validateRating(errorCallback) {
        var rating = Number(this.rating);
        if (!rating || rating < 1 || rating > 5) {
            errorCallback();
        }
    }
};
