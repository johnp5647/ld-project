var express = require('express');
var otherRouter = express.Router();
var User = require('../models/user');

otherRouter.route('/')
    .get(function (req, res) {
        User.find(function (err, users) {
            if (err) res.status(500).send(err);
			console.log(users);
            res.send(users);
        })
    });

module.exports = otherRouter;