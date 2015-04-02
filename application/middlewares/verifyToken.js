var jwt = require('jwt-simple');
var configuration = require("../configuration");

module.exports = function(req, res, next) {
    var token = (req.body && req.body.access_token) || (req.query && req.query.access_token) || req.headers['x-access-token'];

    if (token) {
        try {
            var decoded = jwt.decode(token, configuration.securityPassPhrase);
            if (decoded.expires <= Date.now()) {
                res.redirect(400, '/user/login');
                res.end('Access token has expired', 400);
            }
            req.user = decoded.username;
            next();
            // handle token here
        }
        catch (err) {
            res.redirect(400, '/user/login');
        }
    }
    else {
        res.redirect(400, '/user/login')
    }
}