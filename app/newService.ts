namespace angular101 {
    
    export interface INewService {
        getMessage(): string;
        getMessageViaPromise(aCondition: boolean): ng.IPromise<{}>;
    }
    
    export class NewService implements INewService {
        public static instance():
            (q: ng.IQService) => INewService {
            const service = (q: ng.IQService) => {
                return new NewService(q);
            };
            service.$inject = ["$q"];
            return service;
        }

        private message: Message;
        private q: ng.IQService;

        constructor(q: ng.IQService) {
            this.q = q;
            this.message = new Message("This message, built with a constructor, has come from the new service!");
        }       

        public getMessage(): string {
            return this.message.text;
        }

        public getMessageViaPromise(aCondition: boolean): ng.IPromise<{}> {
            const deferred = this.q.defer();
            if (aCondition) {
                deferred.resolve(this.message.text.concat("Via a promise!!!"));
            } else {
                deferred.reject("Error : condition not satisfied");
            }
            return deferred.promise;
        }
    }

    angular.module("angular101").factory("newService", NewService.instance());

}
