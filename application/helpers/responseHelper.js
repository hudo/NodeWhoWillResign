module.exports = {
    responseOk: function(res, obj) {
        res.status(200).json(JSON.stringify(obj));
    },
    responseKo: function(res, err){
        res.status(400).json({ error: err });
    }
};