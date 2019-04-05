describe('New Service Factory', () => {
    var newService: angular101.INewService;

    describe('standard tests', () => {

        beforeEach(angular.mock.module('angular101'));

        beforeEach(inject((_newService_: angular101.INewService) => {
            newService = _newService_;
        }));

        it('message should match', () => {
            var message: angular101.Message =
                new angular101.Message("This message, built with a constructor, has come from the new service!");
            var expected: string = message.text;
            var actual: string = newService.getMessage();
            expect(expected).toEqual(actual);
        });

    });

    describe('tests with promises', () => {
        var $q: ng.IQService, $rootScope : ng.IRootScopeService;

        var expectedMessage: angular101.Message =
            new angular101.Message("This message, built with a constructor, has come from the new service!Via a promise!!!");        

        beforeEach(angular.mock.module("angular101"));
        
        beforeEach(inject((_newService_:  angular101.INewService, 
                            _$q_: ng.IQService, _$rootScope_: ng.IRootScopeService) => {
            newService = _newService_;
            $q = _$q_;
            $rootScope = _$rootScope_;
        }));
        
        describe("newService.getMessageViaPromise()", () => {
    
            it("should exist", function(){
                expect(newService.getMessageViaPromise).toBeDefined();
            });

            it("should produce a promise", () => {
                var p = newService.getMessageViaPromise();        
                expect(p instanceof $q.resolve().constructor).toBeTruthy();
            });

            it("should equal message", () => {                
                var actualMessage: any;

                newService.getMessageViaPromise().then((result) =>  
                    { actualMessage = result; });
        
                $rootScope.$apply();
        
                expect(expectedMessage.text).toEqual(actualMessage);
            });

        });
    });
});
