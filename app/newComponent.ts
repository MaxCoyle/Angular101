namespace angular101 {
    export class NewComponent implements ng.IComponentOptions {  
        public bindings: any;
        public controller: any;
        public templateUrl: string;
        public controllerAs: string;
    
        constructor() {
            this.bindings = {            
            };
            this.controller = NewController;
            this.templateUrl = "app/newDirective.html";
            this.controllerAs = "vm";
        }
    }
    
    export interface INewController {
        message: string;
        secondaryMessage: string;
    }
    
    export class NewController implements INewController {
        public static $inject = ["newService"];
        public newService: angular101.INewService;
        public message: string = "";
        public secondaryMessage: string = "";

        constructor(newService: angular101.INewService) {            
            this.newService = newService;
        } 

        public $onInit = () => {
            this.message = this.newService.getMessage();
            this.newService.getMessageViaPromise().then (
                (response: any) => {
                    this.secondaryMessage = response;
                },
                (errorResponse: any) => {
                    this.secondaryMessage = errorResponse;
                }
            )
        }
    }

    angular.module("angular101")
        .component("newComponent", new angular101.NewComponent());
}
