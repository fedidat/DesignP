"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Point_1 = require("./Point");
var Player = /** @class */ (function () {
    function Player(username, id) {
        this.username = username;
        this.id = id;
        this.flagFile = "image/" + this.id + ".png";
        this.pawnFile = "image/" + this.id + "h.png";
        this.position = Player.startingPoints[this.id];
    }
    Player.startingPoints = [
        new Point_1.Point(0, 0),
        new Point_1.Point(1, 1),
        new Point_1.Point(0, 1),
        new Point_1.Point(1, 0),
        new Point_1.Point(0.5, 0),
        new Point_1.Point(0, 0.5),
        new Point_1.Point(0.5, 1),
        new Point_1.Point(1, 0.5),
    ];
    return Player;
}());
exports.Player = Player;
//# sourceMappingURL=Player.js.map