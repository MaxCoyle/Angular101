describe('Test Service Factory', function() {
    var testService;  
    
    beforeEach(angular.mock.module('angular101'));
      
    beforeEach(inject(function(_testService_) {
        testService = _testService_;
    }));  
    
    it('message should match', function() {
      var expected = "This message has come from the test service!";
      var actual = testService.getMessage();
      expect(expected).toEqual(actual);
    });
});