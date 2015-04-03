var should = require("should");
var configuration = require("../../application/configuration");
var moment = require("moment");
var jwt = require("jwt-simple");
var verifyAdminMiddleware = require("../../application/middlewares/verifyAdmin");


describe("verifyAdmin", function(){
    var tests = [
        {isAdmin: true, expected: true},
        {isAdmin: false, expected: false},
    ];
    
    tests.forEach(function(test){
        it("isAdmin " + test.isAdmin, function(){
            //Arrange
            var token = jwt.encode({
                username: "test",
                expires: moment().add(7, 'days').valueOf(),
                isAdmin: test.isAdmin
            }, configuration.securityPassPhrase);
            
            var req = 
            {
                body: {
                    access_token: token
                }
            };
            var res = {};
            
            var nextHasBeenCalled = false;
            
            //Act
            verifyAdminMiddleware(req, res, function(){
                nextHasBeenCalled = true;
            });
            
            //Assert
            nextHasBeenCalled.should.be.exactly(test.expected);
        });    
    });
    
    
       
});