angular.module("angular101")
.controller("testController", ["$scope", "testService",
    function($scope, testService){        
        $scope.text = testService.getMessage();
    }
]).directive("testDirective", function () {
    return {
        restrict: "E",
        replace: false,
        templateUrl: "app/testDirective.html",
        controller: "testController"
    };
});


// to do :-
// add in some typescript
// add in require.js
