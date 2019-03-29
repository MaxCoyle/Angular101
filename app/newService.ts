//import * as angular from "angular"

namespace angular101 {
    
    export interface INewService {
        getMessage(): string;
    }
    
    export class NewService implements INewService {
        public static instance():
            (testService: any) => INewService {
            const service = () => {
                return new NewService();
            };        
            return service;
        }
        
        private testService: any;    
    
        constructor() {
    
        }
    
        private message: string = "This message has come from the new service!";
    
        public getMessage(): string {
            return this.message;
        }
    }

    angular.module("angular101").factory("newService", NewService.instance());

}

