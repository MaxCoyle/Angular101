angular.module("angular101")
    .controller("testController", ["$scope", "testService",
        function($scope, testService){        
            $scope.text = testService.getMessage();
        }
]);

// to do :-
// add in directive
// add in some typescript
// add in require.js
