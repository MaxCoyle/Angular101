angular.module("angular101").factory("testService",
    function () {
		var message = "This message has come from the test service!";

        return {
            getMessage: function () {
                return message;
            }
        };
    }
);
