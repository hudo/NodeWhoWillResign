module.exports = function levelSubscribe(db) {
    db.subscribe = function(pattern, listener) { //add new function to db
        db.on('put', function(key, val) { //decorating on put
            var match = Object.keys(pattern).every(function(k) {
                return pattern[k] === val[k];
            });
            if (match) {
                listener(key, val);
            }
        });
    };
    return db;
};