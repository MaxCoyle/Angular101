describe('New Service Factory', function() {
    var newService: angular101.INewService;

    describe('standard tests', function() {

        beforeEach(angular.mock.module('angular101'));

        beforeEach(inject(function(_newService_: angular101.INewService) {
            newService = _newService_;
        }));

        it('message should match', function() {
            var message: angular101.Message =
                new angular101.Message("This message, built with a constructor, has come from the new service!");
            var expected: string = message.text;
            var actual: string = newService.getMessage();
            expect(expected).toEqual(actual);
        });

    });

    describe('tests with promises', function() {        
        var $q: ng.IQService, $rootScope : ng.IRootScopeService, $provide: ng.auto.IProvideService, 
        deferred: ng.IDeferred<{}>, mockedDeferred: ng.IDeferred<{}>;

        var message: angular101.Message =
        new angular101.Message("This message, built with a constructor, has come from the new service!Via a promise!!!");        
        
        function mockQ(){
            deferred = $q.defer();
            spyOn(newService, "getMessageViaPromise");
            return deferred;
        }
        
        beforeEach(angular.mock.module("angular101"));
        beforeEach(angular.mock.module(function(_$provide_: ng.auto.IProvideService){
            $provide = _$provide_;
        }));
        
        beforeEach(inject(function(_newService_:  angular101.INewService, 
                            _$q_: ng.IQService, _$rootScope_: ng.IRootScopeService){
            newService = _newService_;
            $q = _$q_;
            $rootScope = _$rootScope_;
        }));
        
        describe("newService.getMessageViaPromise()", function(){
    
            beforeEach(function(){
                mockedDeferred = mockQ();
            });
    
            it("should exist", function(){
                expect(newService.getMessageViaPromise).toBeDefined();
            });

            // it("should equal message", function(){
            //     newService.getMessageViaPromise();
            //     deferred.resolve(function(){
            //         return message.text;
            //     });
            //     expect(deferred.promise).toEqual(message.text);
            // });

        });
    });
});
