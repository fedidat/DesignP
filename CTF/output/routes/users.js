"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var router = express.Router();
var loginInfo = [
    { "username": "admin" }
];
var loggedIn = [];
router.post('/login', function (req, res) {
    var username = req.body.username;
    var userInfo = loginInfo.filter(function (info) { return info.username === username; })[0];
    if (!userInfo) {
        loggedIn.push(username);
        res.cookie('user', username, { maxAge: 60 * 60 * 24 * 365 })
            .send("logged in successfully");
    }
    else {
        res.status(400).send("username already exists");
    }
});
router.get('/loggedIn', function (req, res) {
    res.send(loggedIn);
});
module.exports = router;
//# sourceMappingURL=users.js.map