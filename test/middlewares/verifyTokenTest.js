var should = require("should");
var configuration = require("../../application/configuration");
var moment = require("moment");
var jwt = require("jwt-simple");
var verifyTokenMiddleware = require("../../application/middlewares/verifyToken");
var sinon = require("sinon");



describe("verifyToken", function() {
    it("token is valid", function() {
        //Arrange
        var token = jwt.encode({
            username: "test",
            expires: moment().add(7, 'days').valueOf(),
            isAdmin: false
        }, configuration.securityPassPhrase);

        var req = {
            body: {
                access_token: token
            }
        };
        var res = {};
    
        var next = sinon.spy();
        
        //Act
        verifyTokenMiddleware(req, res, next);

        //Assert
        next.called.should.be.exactly(true);
    });

    it("token is invalid", function() {
        //Arrange
        var token = jwt.encode({
            username: "test",
            expires: moment().add(7, 'days').valueOf(),
            isAdmin: false
        }, "blablabla");

        var req = {
            body: {
                access_token: token
            }
        };
        var res = {
            redirect: function(port, url) {}
        };

        var resSpy = sinon.spy(res, "redirect");
        var next = sinon.spy();

        
        //Act
        verifyTokenMiddleware(req, res, next);

        //Assert
        next.called.should.be.exactly(false);
        resSpy.withArgs(400, '/user/login').calledOnce.should.be.exactly(true);
    });
});