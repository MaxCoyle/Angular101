(function() {
    'use strict';
  
    // Creating the module and factory we referenced in the beforeEach blocks in our test file
    angular.module('angular101', [])
        .factory('Users', function() {
            var Users = {};
        
            // Users.method = function() {};
        
            return Users;
    });
})();