"use strict";
//import * as angular from "angular"
var angular101;
(function (angular101) {
    var NewService = /** @class */ (function () {
        function NewService() {
            this.message = "This message has come from the new service!";
        }
        NewService.instance = function () {
            var service = function () {
                return new NewService();
            };
            return service;
        };
        NewService.prototype.getMessage = function () {
            return this.message;
        };
        return NewService;
    }());
    angular101.NewService = NewService;
    angular.module("angular101").factory("newService", NewService.instance());
})(angular101 || (angular101 = {}));
//# sourceMappingURL=newService.js.map