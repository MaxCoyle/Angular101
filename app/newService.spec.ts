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

    // describe('tests with promises', function() {
        
    //     beforeEach(angular.mock.module('angular101'));
          
    //     beforeEach(function () {
    //         newService = jasmine.createSpyObj('newService', ['getMessageViaPromise']);            
    //     });

        
    //     it('message should match', function() {
    //         var message: angular101.Message =
    //             new angular101.Message("This message, built with a constructor, has come from the new service!");
    //         var expected: string = message.text;
    //         var actual: string = newService.getMessage();
    //         expect(expected).toEqual(actual);
    //     });

    // });
});
