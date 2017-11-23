"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Player_1 = require("./Player");
var CtfBoard = /** @class */ (function () {
    function CtfBoard() {
        var _this = this;
        this.players = [];
        this.boardSize = { width: 500, height: 500 };
        this.addPlayer = function (username) {
            var created = new Player_1.Player(username, _this.players.length);
            _this.players.push(created);
        };
    }
    return CtfBoard;
}());
exports.CtfBoard = CtfBoard;
//# sourceMappingURL=CtfBoard.js.map