module.exports = function enableAuthentication(server) {
    // enable built-in authentication
    server.enableAuth();
  
    // Add a new role!
    server.models.Role.create({
        name: 'admin'
    }, function(err, role) {
        if (err) { return cb(err); }
        
        // Maybe add a user to the new "admin" role?
        role.principals.create({
            principalType: server.models.RoleMapping.USER,
            principalId: 1
        });
    });
    
    // Create a custom role resolver (dynamic role)
    server.models.Role.registerResolver('employee', function(role, context, cb) {
        if (context.modelName !== 'CoffeeShop') {
            // the target model is not a CoffeeShop, so we don't need to check the role
            return cb(null, false);
        }
        
        if (!context.accessToken.userId) {
            // Not logged in!
            return cb(null, false);
        }
        
        // do some other check to determine employment status here...
        var isEmployee = true;
        // if there was an error in this process, execute the callback with an Error object!
        if (err) {
            return cb(err);
        }
        
        // Now tell LoopBack the answer!
        cb(null, isEmployee);
    });
};
