import * as express from "express";
import * as path from "path";
var router = express.Router();

let loginInfo: { "username": string}[] = [
    { "username": "admin" }
];
let loggedIn: string[] = [];

router.post('/login', (req, res) => {
    var username: string = req.body.username;
    var userInfo: {"username": string} = loginInfo.filter(info => info.username === username)[0];
    if (!userInfo) {
        loggedIn.push(username);
        res.cookie('user', username, { maxAge: 60 * 60 * 24 * 365 })
            .send("logged in successfully");
    }
    else {
        res.status(400).send("username already exists");
    }
});

router.get('/loggedIn', (req, res) => {
    res.send(loggedIn);
});

module.exports = router;