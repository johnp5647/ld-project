var express = require('express');
var authRouter = express.Router();
var User = require('../models/user');

authRouter.post('/login', function (req, res) {
    var user = new User(req.body);
    user.save(function (err, newUser) {
        if (err) res.status(500).send(err);
        res.send(newUser);

    });
});

module.exports = authRouter;