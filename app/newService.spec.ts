describe('New Service Factory', function() {
    var newService: any;  
    
    beforeEach(angular.mock.module('angular101'));
      
    beforeEach(inject(function(_newService_) {
        newService = _newService_;
    }));  
    
    it('message should match', function() {

      var message: angular101.Message =
          new angular101.Message("This message, built with a constructor, has come from the new service");
      var expected = message.text;
      var actual = newService.getMessage();
      expect(expected).toEqual(actual);
    });
});