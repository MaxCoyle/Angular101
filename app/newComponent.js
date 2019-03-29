"use strict";
var angular101;
(function (angular101) {
    var NewComponent = /** @class */ (function () {
        function NewComponent() {
            this.bindings = {};
            this.controller = NewController;
            this.templateUrl = "app/newDirective.html";
            this.controllerAs = "vm";
        }
        return NewComponent;
    }());
    angular101.NewComponent = NewComponent;
    var NewController = /** @class */ (function () {
        function NewController(newService) {
            var _this = this;
            this.$onInit = function () {
                _this.message = _this.newService.getMessage();
            };
            this.newService = newService;
        }
        NewController.$inject = ["newService"];
        return NewController;
    }());
    angular101.NewController = NewController;
    angular.module("angular101")
        .component("newComponent", new angular101.NewComponent());
})(angular101 || (angular101 = {}));
//# sourceMappingURL=newComponent.js.map