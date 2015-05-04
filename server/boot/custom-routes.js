
module.exports = function(app) {
    var restApiRoot = app.get('restApiRoot');
    
    app.get(restApiRoot + '/ping', function(req, res, next) {
        res.end('pong');
    });
    
};
