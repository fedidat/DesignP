(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("MyLib", [], factory);
	else if(typeof exports === 'object')
		exports["MyLib"] = factory();
	else
		root["MyLib"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CtfBoard_1 = __webpack_require__(1);
var Cookies = __webpack_require__(4);
Cookies.set('name', 'value');
Cookies.get('name'); // => 'value' 
(function () {
    var username = Cookies.get("user");
    var board = new CtfBoard_1.CtfBoard(username);
    board.prepareBoard();
    if (Cookies.get("user")) {
        board.addPlayer(username);
    }
    board.addPlayer("robot 1");
    board.addPlayer("robot 2");
    var handleKeyDown = function (e) { board.doKeyDown(e); };
    var handleKeyUp = function (e) { board.doKeyUp(e); };
    window.addEventListener('keydown', handleKeyDown, true);
    window.addEventListener('keyup', handleKeyUp, true);
})();


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Player_1 = __webpack_require__(2);
var Point_1 = __webpack_require__(3);
var Dimension_1 = __webpack_require__(5);
var Flag_1 = __webpack_require__(6);
var Direction_1 = __webpack_require__(8);
var CtfBoard = /** @class */ (function () {
    function CtfBoard(currentPlayer) {
        this.players = [];
        this.flags = [];
        this.dimension = new Dimension_1.Dimension(800, 400);
        this.color = "Lightgrey";
        this.keyState = [];
        this.currentPlayer = currentPlayer;
        this.gameLoop();
    }
    CtfBoard.prototype.getCurrentPlayer = function () {
        var _this = this;
        var filtered = this.players.filter(function (player) { return player.username === _this.currentPlayer; });
        return filtered.length === 1 ? filtered[0] : undefined;
    };
    CtfBoard.prototype.prepareBoard = function () {
        $('#boardarea').attr('width', this.dimension.width + 50).attr('height', this.dimension.height + 50);
        $("#boardarea").css("background-color", this.color);
        $("#boardarea").css("z-index", -1);
    };
    CtfBoard.prototype.addPlayer = function (username) {
        var created = new Player_1.Player(username, this.players.length, this.dimension);
        this.players.push(created);
        this.redrawCanvas();
        this.addRandomFlags();
    };
    CtfBoard.prototype.addRandomFlags = function () {
        for (var i = 0; i < 2; i++) {
            var randX = Math.round(Math.random() * this.dimension.width);
            var randY = Math.round(Math.random() * this.dimension.height);
            var flagPoint = new Point_1.Point(randX, randY);
            var flagDimension = new Dimension_1.Dimension(50, 50);
            var flag = new Flag_1.Flag(flagPoint, flagDimension);
            this.flags.push(flag);
        }
        this.redrawCanvas();
    };
    CtfBoard.prototype.doKeyDown = function (event) {
        this.keyState[event.keyCode || event.which] = true;
    };
    CtfBoard.prototype.doKeyUp = function (event) {
        this.keyState[event.keyCode || event.which] = false;
    };
    CtfBoard.prototype.gameLoop = function () {
        var _this = this;
        if (!this.getCurrentPlayer())
            return;
        if (this.keyState[38] || this.keyState[87]) {
            this.getCurrentPlayer().move(Direction_1.Direction.UP, this.dimension);
        }
        if (this.keyState[40] || this.keyState[83]) {
            this.getCurrentPlayer().move(Direction_1.Direction.DOWN, this.dimension);
        }
        if (this.keyState[37] || this.keyState[65]) {
            this.getCurrentPlayer().move(Direction_1.Direction.LEFT, this.dimension);
        }
        if (this.keyState[39] || this.keyState[68]) {
            this.getCurrentPlayer().move(Direction_1.Direction.RIGHT, this.dimension);
        }
        this.redrawCanvas();
        requestAnimationFrame(function () { return _this.gameLoop; });
    };
    CtfBoard.prototype.redrawCanvas = function () {
        var c = document.getElementById("boardarea");
        var ctx = c.getContext("2d");
        ctx.fillStyle = this.color;
        ctx.fillRect(0, 0, this.dimension.width, this.dimension.height);
        this.players.forEach(function (player) {
            player.draw();
        });
        this.flags.forEach(function (flag) {
            flag.draw();
        });
    };
    return CtfBoard;
}());
exports.CtfBoard = CtfBoard;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Point_1 = __webpack_require__(3);
var Dimension_1 = __webpack_require__(5);
var Graphics_1 = __webpack_require__(7);
var Direction_1 = __webpack_require__(8);
var Player = /** @class */ (function () {
    function Player(username, id, boardDimensions) {
        this.username = username;
        this.id = id;
        var fileIndex = this.id + 1;
        this.pawnFile = "image/" + fileIndex + "h.png";
        var playerX = Player.startingPoints[this.id].x * boardDimensions.width;
        var playerY = Player.startingPoints[this.id].y * boardDimensions.height;
        this.position = new Point_1.Point(playerX, playerY);
    }
    Player.prototype.draw = function () {
        Graphics_1.Graphics.drawImage(this.pawnFile, this.position, new Dimension_1.Dimension(50, 50));
    };
    // switch (keyEvent.keyCode) {
    //     case 38: // Up arrow
    //     case 87: // W
    //         if (this.position.y - dy > 0) {
    //             this.position.y -= dy;
    //         }
    //         break;
    //     case 40: // Down arrow
    //     case 83: // S
    //         if (this.position.y + dy < canvasDimension.height) {
    //             this.position.y += dy;
    //         }
    //         break;
    //     case 37: // Left arrow
    //     case 65: // A
    //         if (this.position.x - dx > 0) {
    //             this.position.x -= dx;
    //         }
    //         break;
    //     case 39: // Right arrow
    //     case 68: // D
    //         if (this.position.x + dx < canvasDimension.width) {
    //             this.position.x += dx;
    //         }
    //         break;
    // }
    Player.prototype.move = function (direction, canvasDimension) {
        var dy = 10, dx = 10;
        switch (direction) {
            case Direction_1.Direction.LEFT:
                if (this.position.x - dx > 0) {
                    this.position.x -= dx;
                }
                break;
            case Direction_1.Direction.RIGHT:
                if (this.position.x + dx < canvasDimension.width) {
                    this.position.x += dx;
                }
                break;
            case Direction_1.Direction.UP:
                if (this.position.y - dy > 0) {
                    this.position.y -= dy;
                }
                break;
            case Direction_1.Direction.DOWN:
                if (this.position.y + dy < canvasDimension.height) {
                    this.position.y += dy;
                }
        }
    };
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


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    return Point;
}());
exports.Point = Point;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
function stringifyAttribute(name, value) {
    if (!value) {
        return '';
    }
    var stringified = '; ' + name;
    if (value === true) {
        return stringified; // boolean attributes shouldn't have a value
    }
    return stringified + '=' + value;
}
function stringifyAttributes(attributes) {
    if (typeof attributes.expires === 'number') {
        var expires = new Date();
        expires.setMilliseconds(expires.getMilliseconds() + attributes.expires * 864e+5);
        attributes.expires = expires;
    }
    return stringifyAttribute('Expires', attributes.expires ? attributes.expires.toUTCString() : '')
        + stringifyAttribute('Domain', attributes.domain)
        + stringifyAttribute('Path', attributes.path)
        + stringifyAttribute('Secure', attributes.secure);
}
function encode(name, value, attributes) {
    return encodeURIComponent(name)
        .replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent) // allowed special characters
        .replace(/\(/g, '%28').replace(/\)/g, '%29') // replace opening and closing parens
        + '=' + encodeURIComponent(value)
        .replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent) // allowed special characters
        + stringifyAttributes(attributes);
}
exports.encode = encode;
function parse(cookieString) {
    var result = {};
    var cookies = cookieString ? cookieString.split('; ') : [];
    var rdecode = /(%[0-9A-Z]{2})+/g;
    for (var i = 0; i < cookies.length; i++) {
        var parts = cookies[i].split('=');
        var cookie = parts.slice(1).join('=');
        if (cookie.charAt(0) === '"') {
            cookie = cookie.slice(1, -1);
        }
        try {
            var name_1 = parts[0].replace(rdecode, decodeURIComponent);
            result[name_1] = cookie.replace(rdecode, decodeURIComponent);
        }
        catch (e) {
        }
    }
    return result;
}
exports.parse = parse;
function getAll() {
    return parse(document.cookie);
}
exports.getAll = getAll;
function get(name) {
    return getAll()[name];
}
exports.get = get;
function set(name, value, attributes) {
    document.cookie = encode(name, value, __assign({ path: '/' }, attributes));
}
exports.set = set;
function remove(name, attributes) {
    set(name, '', __assign({}, attributes, { expires: -1 }));
}
exports.remove = remove;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Dimension = /** @class */ (function () {
    function Dimension(width, height) {
        this.width = width;
        this.height = height;
    }
    return Dimension;
}());
exports.Dimension = Dimension;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Graphics_1 = __webpack_require__(7);
var Flag = /** @class */ (function () {
    function Flag(position, dimension, playerId) {
        this.position = position;
        this.player = undefined;
        this.dimension = dimension;
        this.flagFile = playerId ? "image/" + playerId + ".png" : "image/blankf.png";
    }
    Flag.prototype.conquer = function (byPlayer) {
        this.player = byPlayer;
    };
    Flag.prototype.draw = function () {
        Graphics_1.Graphics.drawImage(this.flagFile, this.position, this.dimension);
    };
    return Flag;
}());
exports.Flag = Flag;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Graphics = /** @class */ (function () {
    function Graphics() {
    }
    Graphics.drawImage = function (filePath, position, dimension) {
        var c = document.getElementById(Graphics.canvasId);
        var ctx = c.getContext("2d");
        var img = new Image();
        img.src = filePath;
        img.onload = function () { return ctx.drawImage(img, position.x, position.y, dimension.width, dimension.height); };
    };
    Graphics.canvasId = "boardarea";
    return Graphics;
}());
exports.Graphics = Graphics;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Direction;
(function (Direction) {
    Direction[Direction["UP"] = 0] = "UP";
    Direction[Direction["DOWN"] = 1] = "DOWN";
    Direction[Direction["LEFT"] = 2] = "LEFT";
    Direction[Direction["RIGHT"] = 3] = "RIGHT";
})(Direction = exports.Direction || (exports.Direction = {}));


/***/ })
/******/ ]);
});
//# sourceMappingURL=bundled.js.map