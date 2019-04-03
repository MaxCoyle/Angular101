namespace angular101 {
    
    export interface INewService {
        getMessage(): string;
    }
    
    export class NewService implements INewService {
        public message: Message;

        public static instance():
            () => INewService {
            const service = () => {
                return new NewService();
            };        
            return service;
        }

        constructor() {
            this.message = new Message("This message, built with a constructor, has come from the new service");
        }       

        public getMessage(): string {
            return this.message.text;
        }
    }

    angular.module("angular101").factory("newService", NewService.instance());

}
