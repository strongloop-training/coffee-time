module.exports = function() {
    
    return function logger(req, res, next) {
        
        console.log('Here I am! ' + req.url);
        
        next();
        
    };
    
}