module.exports = function() {
    
    return function logger(req, res, next) {
        
        if (/\/login$/.test(req.url)) {
            console.log('A user is logging in!');
        }
        
        // don't forget to call next() !
        next();
    };
    
}